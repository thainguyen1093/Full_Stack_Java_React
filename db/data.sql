DROP DATABASE IF EXISTS java_react;
CREATE DATABASE java_react;

USE java_react;

DROP TABLE IF EXISTS user;
CREATE TABLE IF NOT EXISTS user
(
    id       INT(11)      NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email    VARCHAR(255) NOT NULL,
    image    VARCHAR(255),
    active   TINYINT(1)             DEFAULT TRUE,
    role     ENUM ("ADMIN", "USER") DEFAULT "USER",
    user_address_id INT(11),
    PRIMARY KEY (id)
);


DROP TABLE IF EXISTS user_verification;
CREATE TABLE IF NOT EXISTS user_verification
(
    id                INT(11) NOT NULL AUTO_INCREMENT,
    user_id           INT(11),
    verification_code VARCHAR(6),
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS user_address;
CREATE TABLE IF NOT EXISTS user_address
(
    id       INT(11) NOT NULL AUTO_INCREMENT,
    street   VARCHAR(100),
    city     VARCHAR(100),
    zip_code INT(5),
    country  VARCHAR(100),
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS product;
CREATE TABLE IF NOT EXISTS product
(
    id         INT(11) NOT NULL AUTO_INCREMENT,
    name    VARCHAR(255) NOT NULL,
    active   TINYINT(1)             DEFAULT TRUE,
    
    status   VARCHAR(100),

    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id           INT(11),
    product_location_id INT(11),
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS product_image;
CREATE TABLE IF NOT EXISTS product_image
(
    id         INT(11) NOT NULL AUTO_INCREMENT,
    product_id    INT(11) NOT NULL,
    image VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
); 

DROP TABLE IF EXISTS product_location;
CREATE TABLE IF NOT EXISTS product_location
(
    id       INT(11) NOT NULL AUTO_INCREMENT,
    street   VARCHAR(100),
    city     VARCHAR(100),
    zip_code INT(5),
    country  VARCHAR(100),
    PRIMARY KEY (id)
);

