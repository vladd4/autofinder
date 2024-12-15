-- Clients Table
CREATE TABLE clients (
    id INT PRIMARY KEY,
    email VARCHAR(255),
    name VARCHAR(255),
    phone VARCHAR(15),
    telegram VARCHAR(255),
    avatar VARCHAR(255)
);

-- Brands Table
CREATE TABLE brands (
    id INT PRIMARY KEY,
    brand VARCHAR(255)
);

-- Models Table
CREATE TABLE models (
    id INT PRIMARY KEY,
    model VARCHAR(255),
    brand_id INT,
    FOREIGN KEY (brand_id) REFERENCES brands(id)
);

-- Sites Table
CREATE TABLE sites (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    photo_url TEXT
);

-- Types Table
CREATE TABLE types (
    id INT PRIMARY KEY,
    type VARCHAR(255)
);

-- Fuels Table
CREATE TABLE fuels (
    id INT PRIMARY KEY,
    fuel VARCHAR(255)
);

-- Gearboxes Table
CREATE TABLE gearboxes (
    id INT PRIMARY KEY,
    gearbox VARCHAR(255)
);

-- Cars Table
CREATE TABLE cars (
    id CHAR(36) PRIMARY KEY,  -- Assuming UUID format for increment
    ad_name VARCHAR(255),
    brand_id INT,
    model_id INT,
    year INT,
    price INT,
    mileage INT,
    photo_url TEXT,
    type_id INT,
    gearbox_id INT,
    fuel_id INT,
    power INT,
    site_id INT,
    link TEXT,
    parsed_at TIMESTAMP,
    FOREIGN KEY (brand_id) REFERENCES brands(id),
    FOREIGN KEY (model_id) REFERENCES models(id),
    FOREIGN KEY (type_id) REFERENCES types(id),
    FOREIGN KEY (gearbox_id) REFERENCES gearboxes(id),
    FOREIGN KEY (fuel_id) REFERENCES fuels(id),
    FOREIGN KEY (site_id) REFERENCES sites(id)
);

-- Saved Searches Table
CREATE TABLE saved_searches (
    id INT PRIMARY KEY,
    client_id INT,
    brand_id INT,
    model_id INT,
    max_price FLOAT,
    min_price FLOAT,
    max_mileage INT,
    min_mileage INT,
    min_year INT,
    max_year INT,
    type_id INT,
    gearbox_id INT,
    max_power FLOAT,
    min_power FLOAT,
    fuel_id INT,
    telegram BOOLEAN,
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (brand_id) REFERENCES brands(id),
    FOREIGN KEY (model_id) REFERENCES models(id),
    FOREIGN KEY (type_id) REFERENCES types(id),
    FOREIGN KEY (gearbox_id) REFERENCES gearboxes(id),
    FOREIGN KEY (fuel_id) REFERENCES fuels(id)
);
