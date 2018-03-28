DROP TABLE IF EXISTS Warehouse;
CREATE TABLE Warehouse(
    warehouse_id SERIAL,
  warehouse_id, address VARCHAR(50),
  PRIMARY KEY (warehouse_id));

INSERT INTO Warehouse (warehouse_id, address)
VALUES ('2','123 Warehouse Avenue');

INSERT INTO Warehouse (warehouse_id, address)
VALUES ('3','222 Boulder Street');

INSERT INTO Warehouse (warehouse_id, address)
VALUES ('4','9923 Big Buildings');

INSERT INTO Warehouse (warehouse_id, address)
VALUES ('5','334 Small Street');

INSERT INTO Warehouse (warehouse_id, address)
VALUES ('6','2231 Empty Lane');
