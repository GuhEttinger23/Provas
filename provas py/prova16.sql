CREATE TABLE Produtos (
    ProdutoID INT PRIMARY KEY,
    NomeProduto VARCHAR(100) NOT NULL,
    Quantidade INT,
    Preco DECIMAL(10, 2)
);

INSERT INTO Produtos (ProdutoID, NomeProduto, Quantidade, Preco)
VALUES (1, 'Notebook Gamer', 15, 4500.00);

INSERT INTO Produtos (ProdutoID, NomeProduto, Quantidade, Preco)
VALUES (2, 'Mouse Sem Fio', 50, 120.50);

INSERT INTO Produtos (ProdutoID, NomeProduto, Quantidade, Preco)
VALUES (3, 'Monitor 24 Polegadas', 20, 899.90);