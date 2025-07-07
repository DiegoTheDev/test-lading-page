CREATE TABLE fornecedor (
  nome VARCHAR(50),
  telefone VARCHAR(10),
  email VARCHAR(100),
  id_fornecedor INT PRIMARY KEY
);

CREATE TABLE lote (
  quant INT,
  validade TIMESTAMP,
  dat_ent TIMESTAMP,
  id_estoque INT PRIMARY KEY,
  id_fornecedor INT,
  FOREIGN KEY (id_fornecedor) 
  	REFERENCES fornecedor(id_fornecedor)
);

CREATE TABLE ingrediente (
  nome VARCHAR(50),
  estoque INT,
  id_ingrediente INT PRIMARY KEY,
  id_estoque INT,
  FOREIGN KEY (id_estoque) 
  	REFERENCES lote(id_estoque)
);

CREATE TABLE prato (
  nome VARCHAR(50),
  descricao VARCHAR(300),
  preco VARCHAR(5),
  id_prato INT PRIMARY KEY
);

CREATE TABLE prato_ingrediente (
  id_prato INT,
  id_ingrediente INT,
  FOREIGN KEY (id_prato) 
  	REFERENCES prato(id_prato),
  FOREIGN KEY (id_ingrediente) 
  	REFERENCES ingrediente(id_ingrediente)
);

CREATE TABLE mesa (
  id_mesa INT PRIMARY KEY
);

CREATE TABLE categoria (
  nome VARCHAR(50),
  descricao VARCHAR(100),
  id_categoria INT PRIMARY KEY
);

CREATE TABLE prato_categoria (
  id_prato INT,
  id_categoria INT,
  FOREIGN KEY (id_prato) 
  	REFERENCES prato(id_prato),
  FOREIGN KEY (id_categoria) 
  	REFERENCES categoria(id_categoria)
);

CREATE TABLE funcionario (
  nome VARCHAR(50),
  email VARCHAR(100),
  cpf VARCHAR(20),
  telefone VARCHAR(10),
  cargo VARCHAR(30),
  id_funcionario INT PRIMARY KEY
);

CREATE TABLE cliente (
  nome VARCHAR(50),
  email VARCHAR(100),
  telefone VARCHAR(10),
  id_cliente INT PRIMARY KEY
);

CREATE TABLE reserva (
  estado VARCHAR(10),
  horario TIMESTAMP,
  pago BOOLEAN,
  id_reserva INT PRIMARY KEY,
  id_cliente INT,
  id_mesa INT,
  FOREIGN KEY (id_cliente) 
  	REFERENCES cliente(id_cliente),
  FOREIGN KEY (id_mesa) 
  	REFERENCES mesa(id_mesa)
);

CREATE TABLE pedido (
  id_pedido INT PRIMARY KEY,
  horario TIMESTAMP,
  id_prato INT,
  id_reserva INT,
  FOREIGN KEY (id_prato) 
  	REFERENCES prato(id_prato),
  FOREIGN KEY (id_reserva) 
  	REFERENCES reserva(id_reserva)
);
