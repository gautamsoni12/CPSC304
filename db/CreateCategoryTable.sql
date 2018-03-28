DROP TABLE IF EXISTS Category;
CREATE TABLE Category(
  category_id SERIAL,
name VARCHAR(50) NOT NULL,
PRIMARY KEY (category_id));

INSERT INTO Category (category_id, name)
VALUES ('1','Clothes');

INSERT INTO Category (category_id, name)
VALUES ('2','Hats');

INSERT INTO Category (category_id, name)
VALUES ('3','Toiletries');

INSERT INTO Category (category_id, name)
VALUES ('4','Household');

INSERT INTO Category (category_id, name)
VALUES ('5','Electronics');
