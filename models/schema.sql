DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

DROP DATABASE IF EXISTS blitzdb;
CREATE DATABASE blitzdb;

CREATE USER blitz@localhost;
GRANT ALL PRIVILEGES ON *.* TO blitz@localhost;
ALTER USER blitz@localhost IDENTIFIED WITH mysql_native_password BY "";

