Fornecedor (
    Nome VARCHAR(40),
    Telefone VARCHAR(10),
    Email VARCHAR(100),
    ID_Fornecedor INT PRIMARY KEY
)

Lote (
    Quantidade INT,
    Validade TIMESTAMP,
    Data_Entrega TIMESTAMP,
    ID_Estoque INT PRIMARY KEY
        referencia Fornecedor   
)

Igrediente (
    Nome VARCHAR(50),
    Estoque INT,
    ID_Estoque INT
        referencia Lote,
    ID_Igrediente INT PRIMARY KEY
)

Prato (
    Nome VARCHAR(50),
    Descricao VARCHAR(300),
    Preco VARCHAR(5),
    ID_prato INT PRIMARY KEY
)

Prato_Igrediente (
    ID_Prato INT
        referencia Prato,
    ID_Igrediente INT 
        referencia Igrediente
)

Mesa (
    ID_Mesa INT PRIMARY KEY
)

Categoria (
    Nome VARCHAR(50),
    Descricao VARCHAR(100),
    ID_Categoria INT PRIMARY KEY
)

Prato_Categoria (
    ID_Prato INT
        referencia Prato,
    ID_Categoria INT
        referencia Categoria
)


Funcionario (
    Nome VARCHAR(50),
    Email VARCHAR(100),
    CPF VARCHAR(20),
    Telefone VARCHAR(10),
    Cargo VARCHAR(30),
    ID_Funcionario INT PRIMARY KEY
)

Cliente (
    Nome VARCHAR(50),
    Email VARCHAR(100),
    Telefone VARCHAR(10),
    ID_cliente INT PRIMARY KEY
)

Reserva (
    Estado VARCHAR(10),
    Horario TIMESTAMP,
    Pago BOOLEAN,
    ID_Reserva INT PRIMARY KEY,
    ID_Cliente INT
        referencia Cliente
    ID_Mesa INT
        referencia Mesa
)

Pedido (
    ID_Prato INT
        referencia Prato,
    Horario TIMESTAMP,
    ID_Pedido INT PRIMARY KEY
        referencia Reserva
)