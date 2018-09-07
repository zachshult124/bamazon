-- Created Database bamazon_db --
CREATE DATABASE bamazon_db;

-- initialize amazon_db --
USE bamazon_db;

-- create table --
CREATE TABLE products(
	item_id INTEGER (11) NOT NULL AUTO_INCREMENT,
	product_name VARCHAR (255) NOT NULL,
	department_name VARCHAR (255) NOT NULL,
	price DECIMAL (10,2),
	stock_quantity INTEGER (10),
	PRIMARY KEY (item_id)
);


-- create products --

-- 1 -- 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fitbit Alta HR", "Electronics", "150.00", "3");
-- 2 -- 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bose SoundLink Bluetooth Speaker", "Electronics", "129.00", "7");
-- 3 -- 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("GoPro HERO4 Session", "Electronics", "164.00", "12");
-- 4 -- 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Roli Lightpad Block", "Electronics", "160.00", "4");
-- 5 -- 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Echo Show - Black", "Electronics", "130.00", "35");
-- 6 -- 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Continental Road Bike Tires", "Sports", "47.99", "2");
-- 7 -- 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kask Rapido Bike Helmet", "Sports", "199.95", "1");
-- 8 -- 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Clarks Men's Desert Chukka Boot", "Shoes", "273.69", "3");
-- 9 -- 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Planet Bike Handlebar tape", "Sports", "17.99", "20");
-- 10 -- 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hoka One One Running Shoes", "Shoes", "129.45", "1");

