import flet as ft
from datetime import datetime

# ==========================================
# CAMADA DE MODELO (POO - Lógica de Negócio)
# ==========================================

class Pessoa:
    """Classe Base demonstrando Herança"""
    def __init__(self, nome, telefone, email):
        self._nome = nome  # Atributo Protegido
        self._telefone = telefone
        self._email = email

    def exibir_informacoes(self):
        """Método que será sobrescrito (Polimorfismo)"""
        return f"Nome: {self._nome} | Contato: {self._telefone}"

class Cliente(Pessoa):
    """Classe que herda de Pessoa"""
    def __init__(self, id_cliente, nome, telefone, email):
        super().__init__(nome, telefone, email)
        self.__id_cliente = id_cliente  # Encapsulamento (Privado)

    # Implementação de Polimorfismo
    def exibir_informacoes(self):
        return f"ID: {self.__id_cliente} | Nome: {self._nome} | Email: {self._email}"

    @property
    def id(self): return self.__id_cliente
    
    @property
    def nome(self): return self._nome

class Quarto:
    """Classe demonstrando Encapsulamento de status"""
    def __init__(self, numero, tipo, preco):
        self.__numero = numero
        self.__tipo = tipo
        self.__preco = preco
        self.__disponivel = True  # Atributo privado

    # Getters
    @property
    def numero(self): return self.__numero
    @property
    def tipo(self): return self.__tipo
    @property
    def preco(self): return self.__preco
    @property
    def disponivel(self): return self.__disponivel

    # Setter controlado
    def alterar_status(self, status: bool):
        self.__disponivel = status

class Reserva:
    def __init__(self, cliente, quarto, data_in, data_out):
        self.cliente = cliente
        self.quarto = quarto
        self.data_in = data_in
        self.data_out = data_out
        self.status = "Ativa"

# ==========================================
# CAMADA DE GERENCIAMENTO
# ==========================================

class GerenciadorDeReservas:
    def __init__(self):
        self.clientes = [
            Cliente("C001", "Maria Oliveira", "11988887777", "maria@email.com"),
            Cliente("C002", "João Silva", "11977776666", "joao@email.com")
        ]
        self.quartos = [
            Quarto(101, "Single", 150.0),
            Quarto(102, "Double", 250.0),
            Quarto(201, "Suite", 500.0)
        ]
        self.reservas = []

    def criar_reserva(self, cliente, quarto, d_in, d_out):
        if quarto.disponivel:
            nova = Reserva(cliente, quarto, d_in, d_out)
            self.reservas.append(nova)
            quarto.alterar_status(False)
            return True
        return False

    def cancelar_reserva(self, reserva):
        reserva.quarto.alterar_status(True)
        self.reservas.remove(reserva)

# ==========================================
# INTERFACE GRÁFICA (Flet)
# ==========================================

def main(page: ft.Page):
    page.title = "Refúgio dos Sonhos - Gerenciador Boutique"
    page.theme_mode = ft.ThemeMode.LIGHT
    page.window_width = 800
    page.window_height = 700
    
    gerente = GerenciadorDeReservas()

    # --- Elementos de UI ---
    lista_quartos = ft.ListView(expand=1, spacing=10, padding=20)
    lista_reservas = ft.ListView(expand=1, spacing=10, padding=20)
    lista_clientes = ft.ListView(expand=1, spacing=10, padding=20)

    def atualizar_interface():
        # Atualiza aba de Quartos
        lista_quartos.controls.clear()
        for q in gerente.quartos:
            cor = ft.colors.GREEN if q.disponivel else ft.colors.RED
            status_txt = "LIVRE" if q.disponivel else "OCUPADO"
            lista_quartos.controls.append(
                ft.Card(
                    content=ft.Container(
                        padding=15,
                        content=ft.Row([
                            ft.Icon(ft.icons.BED, color=cor, size=30),
                            ft.Column([
                                ft.Text(f"Quarto {q.numero} - {q.tipo}", weight="bold"),
                                ft.Text(f"Preço: R$ {q.preco:.2f} | Status: {status_txt}", color=cor)
                            ], expand=True)
                        ])
                    )
                )
            )

        # Atualiza aba de Reservas
        lista_reservas.controls.clear()
        for res in gerente.reservas:
            lista_reservas.controls.append(
                ft.ListTile(
                    leading=ft.Icon(ft.icons.ASSIGNMENT_TURNED_IN),
                    title=ft.Text(f"Hóspede: {res.cliente.nome}"),
                    subtitle=ft.Text(f"Quarto {res.quarto.numero} | {res.data_in} até {res.data_out}"),
                    trailing=ft.IconButton(
                        ft.icons.DELETE_FOREVER, 
                        icon_color="red", 
                        on_click=lambda e, r=res: deletar_reserva(r)
                    )
                )
            )

        # Atualiza aba de Clientes (Uso de Polimorfismo aqui)
        lista_clientes.controls.clear()
        for c in gerente.clientes:
            lista_clientes.controls.append(
                ft.Text(c.exibir_informacoes(), size=14)
            )
        
        page.update()

    def deletar_reserva(res):
        gerente.cancelar_reserva(res)
        atualizar_interface()

    # --- Diálogo de Nova Reserva ---
    input_cliente = ft.Dropdown(label="Selecionar Cliente", expand=True)
    input_quarto = ft.Dropdown(label="Selecionar Quarto Disponível", expand=True)
    input_checkin = ft.TextField(label="Check-in (DD/MM)", hint_text="15/04")
    input_checkout = ft.TextField(label="Check-out (DD/MM)", hint_text="20/04")

    def salvar_reserva(e):
        # Busca objetos reais baseados na seleção dos IDs
        c_obj = next(c for c in gerente.clientes if c.id == input_cliente.value)
        q_obj = next(q for q in gerente.quartos if str(q.numero) == input_quarto.value)
        
        if gerente.criar_reserva(c_obj, q_obj, input_checkin.value, input_checkout.value):
            dlg_reserva.open = False
            atualizar_interface()
        else:
            page.snack_bar = ft.SnackBar(ft.Text("Erro: Quarto não disponível!"))
            page.snack_bar.open = True
        page.update()

    def abrir_modal_reserva(e):
        input_cliente.options = [ft.dropdown.Option(c.id, c.nome) for c in gerente.clientes]
        input_quarto.options = [ft.dropdown.Option(str(q.numero), f"Quarto {q.numero}") for q in gerente.quartos if q.disponivel]
        dlg_reserva.open = True
        page.update()

    dlg_reserva = ft.AlertDialog(
        title=ft.Text("Nova Reserva"),
        content=ft.Column([input_cliente, input_quarto, input_checkin, input_checkout], tight=True),
        actions=[ft.TextButton("Confirmar", on_click=salvar_reserva)]
    )
    page.overlay.append(dlg_reserva)

    # --- Estrutura de Navegação ---
    tabs = ft.Tabs(
        selected_index=0,
        expand=1,
        tabs=[
            ft.Tab(text="Painel de Quartos", icon=ft.icons.HOTEL, content=ft.Column([lista_quartos])),
            ft.Tab(text="Reservas Ativas", icon=ft.icons.LIST_ALT, content=ft.Column([lista_reservas])),
            ft.Tab(text="Hóspedes", icon=ft.icons.PEOPLE, content=ft.Column([lista_clientes])),
        ]
    )

    page.add(
        ft.Row([
            ft.Text("Refúgio dos Sonhos", size=32, weight="bold", color="blue"),
            ft.VerticalDivider(),
            ft.ElevatedButton("Fazer Reserva", icon=ft.icons.ADD, on_click=abrir_modal_reserva)
        ], alignment=ft.MainAxisAlignment.CENTER),
        tabs
    )

    atualizar_interface()

ft.app(target=main)