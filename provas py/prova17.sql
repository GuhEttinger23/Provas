-- 1. Criação da tabela de Produtos (Base)
CREATE TABLE Produtos (
    ProdutoID INT PRIMARY KEY,
    NomeProduto VARCHAR(100) NOT NULL,
    Quantidade INT,
    Preco DECIMAL(10, 2)
);

-- 2. Criação da tabela de Fornecedores (Base)
CREATE TABLE Fornecedores (
    FornecedorID INT PRIMARY KEY,
    NomeFornecedor VARCHAR(100) NOT NULL,
    Contato VARCHAR(50)
);

-- 3. Criação da tabela de Estoque (Com Chaves Estrangeiras)
CREATE TABLE Estoque (
    EstoqueID INT PRIMARY KEY,
    ProdutoID INT,
    FornecedorID INT,
    Quantidade INT NOT NULL,
    DataEntrada DATE NOT NULL,
    -- Estabelecendo as relações
    FOREIGN KEY (ProdutoID) REFERENCES Produtos(ProdutoID),
    FOREIGN KEY (FornecedorID) REFERENCES Fornecedores(FornecedorID)
);

-- 4. Inserindo dados para teste
INSERT INTO Produtos VALUES (1, 'Notebook Gamer', 10, 4500.00);
INSERT INTO Fornecedores VALUES (10, 'Tech Distribuidora', 'contato@tech.com');

-- 5. Inserindo um registro no estoque referenciando os IDs acima
INSERT INTO Estoque (EstoqueID, ProdutoID, FornecedorID, Quantidade, DataEntrada)
VALUES (501, 1, 10, 5, '2026-04-15');