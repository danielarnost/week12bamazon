DROP TABLE IF EXISTS bamazondb.products;
CREATE TABLE bamazondb.products(
PRIMARY KEY (ItemID), 
ItemID INTEGER (11) NOT NULL AUTO_INCREMENT, 
ProductName VARCHAR(50),
DepartmentName VARCHAR(50),
Price DECIMAL (5,2),
StockQuantity INTEGER (11)
);

('shoes', 'clothing', 80.33, 20),('hat', 'clothing', 20.50, 20), ('charger', 'electronics', 8.50, 3),('laptop', 'electronics', 850.00, 5),('chair', 'furniture', 300.00, 7),('table', 'furniture', 400.00, 6), ('iphone', 'electronics', 550.00, 20);
INSERT INTO bamazondb.products (ProductName, DepartmentName, Price, StockQuantity)
VALUES ('scarf', 'clothing', 15.00, 12),('jacket', 'clothing', 205.50, 20), ('usb cable', 'electronics', 10.00, 8);
 

SELECT * FROM bamazondb.products; 