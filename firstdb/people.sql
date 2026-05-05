CREATE TABLE people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    f_name VARCHAR(50) NOT NULL,
    l_name VARCHAR(50) NOT NULL,
    result INT NOT NULL
);

INSERT INTO people (f_name, l_name, result) VALUES
('Jane', 'Jet', 35),
('Billy', 'Wibble', 70),
('John', 'Snow', 62),
('Joan', 'Jet', 25),
('Bob', 'Martin', 35),
('Joe', 'Snow', 12),
('Mary', 'Jones', 35),
('Peter', 'Snow', 75);


INSERT INTO people (f_name, l_name, result) VALUES
('John', 'Snow', 62),
('Joan', 'Jet', 25),
('Bob', 'Martin', 35),
('Joe', 'Snow', 12),
('Mary', 'Jones', 35),
('Peter', 'Snow', 75);