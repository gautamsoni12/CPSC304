DROP TABLE IF EXSISTS Employees
CREATE TABLE Employees(
  employee_id SERIAL,
  fname VARCHAR(50) NOT NULL,
  lname VARCHAR(50) NOT NULL,
  password VARCHAR(32) NOT NULL,
  phone VARCHAR(22) NOT NULL,
  employee_sin VARCHAR(9) UNIQUE NOT NULL,
  email VARCHAR(320) UNIQUE NOT NULL,
  warehouse_id INTEGER,
  address VARCHAR(32),
  position VARCHAR(50),
  PRIMARY KEY (employee_id),
  FOREIGN KEY (warehouse_id) REFERENCES Warehouse(warehouse_id)
);

INSERT INTO Employees (FNAME, LNAME, PASSWORD, PHONE, EMPLOYEE_SIN, EMAIL, WAREHOUSE_ID, ADDRESS, POSITION)
  VALUES (‘Penny’, 'Peaches', ‘happy’, '613-555-0139', 123456789, ‘p@abc.com’, 5, ‘12 Rand Ave.’, ‘Senior Manager’);

INSERT INTO Employees (FNAME, LNAME, PASSWORD, PHONE, EMPLOYEE_SIN, EMAIL, WAREHOUSE_ID, ADDRESS, POSITION)
  VALUES (‘Issey’, 'Miyaki', ‘sad’, '780-555-0159', 987364990, ‘i@bob.com’, 2, ‘245 Nowhere Street’, ‘Cashier’);

INSERT INTO Employees (FNAME, LNAME, PASSWORD, PHONE, EMPLOYEE_SIN, EMAIL, WAREHOUSE_ID, ADDRESS, POSITION)
  VALUES (‘Matt’, 'LeBlanc', ‘sun’, '418-555-0169', 937463745, ‘m@tim.com’, ‘5’, ‘152 Penny Lane’, ‘Manager’);
