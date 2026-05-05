CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);


INSERT INTO categories (name) VALUES
('Electronics'),
('Furniture'),
('Stationery'),
('Kitchen'),
('Sports');


INSERT INTO products (name, category_id, price, stock) VALUES
('Laptop', 1, 899.99, 12),
('Smartphone', 1, 699.99, 25),
('Headphones', 1, 129.99, 40),
('Desk', 2, 199.99, 10),
('Office Chair', 2, 149.99, 15),
('Notebook', 3, 2.49, 200),
('Pen Pack', 3, 4.99, 150),
('Stapler', 3, 6.99, 80),
('Blender', 4, 49.99, 30),
('Toaster', 4, 29.99, 25),
('Knife Set', 4, 79.99, 18),
('Football', 5, 19.99, 50),
('Tennis Racket', 5, 89.99, 20),
('Yoga Mat', 5, 24.99, 35),
('Monitor', 1, 159.99, 22),
('Keyboard', 1, 39.99, 60),
('Mouse', 1, 24.99, 70),
('Bookshelf', 2, 129.99, 8),
('Paper Ream', 3, 5.99, 120),
('Water Bottle', 5, 14.99, 45);


INSERT INTO customers (first_name, last_name, email) VALUES
('Alice', 'Smith', 'alice@example.com'),
('Bob', 'Jones', 'bob@example.com'),
('Charlie', 'Brown', 'charlie@example.com'),
('Diana', 'Prince', 'diana@example.com'),
('Evan', 'Stone', 'evan@example.com'),
('Fiona', 'Hall', 'fiona@example.com'),
('George', 'King', 'george@example.com'),
('Hannah', 'Wells', 'hannah@example.com'),
('Ian', 'Cole', 'ian@example.com'),
('Jane', 'Frost', 'jane@example.com');


INSERT INTO orders (customer_id, order_date) VALUES
(1, '2024-01-10'),
(2, '2024-01-12'),
(3, '2024-01-15'),
(1, '2024-01-20'),
(4, '2024-01-22'),
(5, '2024-01-25'),
(6, '2024-01-28'),
(7, '2024-02-01'),
(8, '2024-02-03'),
(9, '2024-02-05');


INSERT INTO order_items (order_id, product_id, quantity) VALUES
(1, 1, 1),
(1, 16, 1),
(2, 4, 1),
(2, 5, 1),
(3, 6, 10),
(3, 7, 5),
(4, 2, 1),
(4, 3, 1),
(5, 9, 1),
(5, 10, 1),
(6, 12, 2),
(6, 14, 1),
(7, 13, 1),
(7, 20, 2),
(8, 15, 1),
(8, 17, 1),
(9, 18, 1),
(9, 6, 20),
(10, 11, 1),
(10, 19, 5),
(1, 3, 1),
(2, 7, 3),
(3, 8, 2),
(4, 16, 1),
(5, 11, 1),
(6, 1, 1),
(7, 14, 1),
(8, 12, 1),
(9, 20, 3);