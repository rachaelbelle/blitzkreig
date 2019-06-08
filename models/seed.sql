USE blitzdb;

CREATE TABLE Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(50),
  zipcode INT(5),
  weather BOOLEAN,
  traffic BOOLEAN,
  quotes BOOLEAN
);

INSERT INTO blitzdb (firstName, lastName, email, password, zipCode, weather, traffic, quotes)
VALUES ("Charlie", "Fake", "fake@gmail.com", "null", "19148", true, true, true, true);
