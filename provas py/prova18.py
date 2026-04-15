import sqlite3
from datetime import datetime

# ==========================================
# 1. CLASSES DE MODELO (POO)
# ==========================================

class Produto:
    def __init__(self, id_prod, nome, descricao, quantidade, preco):
        self.id = id_prod
        self.nome = nome
        self.descricao = descricao
        self.quantidade = quantidade
        self.preco = preco

class Venda:
    def __init__(self, id_produto, quantidade):
        self.id_produto = id_produto
        self.quantidade = quantidade
        self.data_venda = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# ==========================================
# 2. SISTEMA DE PERSISTÊNCIA (BANCO DE DADOS)
# ==========================================

class SistemaEstoque:
    def __init__(self):
        # Conecta ao arquivo (cria se não existir)
        self.conn = sqlite3.connect("hotel_estoque.db")
        self.cursor = self.conn.cursor()
        self._criar_tabelas()

    def _criar_tabelas(self):
        # Tabela de Produtos
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS Produtos (
                id INTEGER PRIMARY KEY,
                nome TEXT NOT NULL,
                descricao TEXT,
                quantidade INTEGER,
                preco REAL
            )
        ''')
        # Tabela de Vendas
        self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS Vendas (
                id_venda INTEGER PRIMARY KEY AUTOINCREMENT,
                id_produto INTEGER,
                quantidade_vendida INTEGER,
                data_venda TEXT,
                FOREIGN KEY (id_produto) REFERENCES Produtos(id)
            )
        ''')
        self.conn.commit()

    def adicionar_produto(self, p: Produto):
        self.cursor.execute("INSERT OR REPLACE INTO Produtos VALUES (?, ?, ?, ?, ?)",
                            (p.id, p.nome, p.descricao, p.quantidade, p.preco))
        self.conn.commit()
        print(f"✅ Produto '{p.nome}' atualizado no banco.")

    def realizar_venda(self, v: Venda):
        # Verifica se há estoque antes de vender
        self.cursor.execute("SELECT quantidade FROM Produtos WHERE id = ?", (v.id_produto,))
        resultado = self.cursor.fetchone()

        if resultado and resultado[0] >= v.quantidade:
            # 1. Registra a venda
            self.cursor.execute("INSERT INTO Vendas (id_produto, quantidade_vendida, data_venda) VALUES (?, ?, ?)",
                                (v.id_produto, v.quantidade, v.data_venda))
            # 2. Baixa no estoque
            self.cursor.execute("UPDATE Produtos SET quantidade = quantidade - ? WHERE id = ?",
                                (v.quantidade, v.id_produto))
            self.conn.commit()
            print(f"💰 Venda de {v.quantidade} unidade(s) registrada!")
        else:
            print("❌ Erro: Estoque insuficiente ou produto não encontrado.")

    def mostrar_relatorio(self):
        print("\n--- STATUS ATUAL DO ESTOQUE ---")
        self.cursor.execute("SELECT * FROM Produtos")
        for linha in self.cursor.fetchall():
            print(f"ID: {linha[0]} | Nome: {linha[1]} | Qtd: {linha[3]} | Preço: R${linha[4]:.2f}")

# ==========================================
# 3. EXECUÇÃO DO PROGRAMA
# ==========================================

if __name__ == "__main__":
    # Instancia o sistema (abre o banco)
    sistema = SistemaEstoque()

    # Criando objetos de exemplo
    p1 = Produto(1, "Água Mineral", "Garrafa 500ml", 100, 4.50)
    p2 = Produto(2, "Cerveja Lata", "Pilsen 350ml", 50, 8.00)

    # Salvando no banco
    sistema.adicionar_produto(p1)
    sistema.adicionar_produto(p2)

    # Simulando uma venda (O hóspede comprou 3 águas)
    nova_venda = Venda(id_produto=1, quantidade=3)
    sistema.realizar_venda(nova_venda)

    # Exibindo como ficou o banco de dados
    sistema.mostrar_relatorio()