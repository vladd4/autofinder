-- Clients Table
CREATE TABLE clients (
    id CHAR(36) PRIMARY KEY,  -- UUID format
    email VARCHAR(255),
    name VARCHAR(255),
    phone VARCHAR(15),
    telegram VARCHAR(255),
    avatar VARCHAR(255)
);

-- Brands Table
CREATE TABLE brands (
    id CHAR(36) PRIMARY KEY,  -- UUID format
    brand VARCHAR(255)
);

-- Models Table
CREATE TABLE models (
    id CHAR(36) PRIMARY KEY,  -- UUID format
    model VARCHAR(255),
    brand_id CHAR(36),
    FOREIGN KEY (brand_id) REFERENCES brands(id)
);

-- Sites Table
CREATE TABLE sites (
    id CHAR(36) PRIMARY KEY,  -- UUID format
    name VARCHAR(255),
    photo_url TEXT
);

-- Types Table
CREATE TABLE types (
    id CHAR(36) PRIMARY KEY,  -- UUID format
    type VARCHAR(255)
);

-- Fuels Table
CREATE TABLE fuels (
    id CHAR(36) PRIMARY KEY,  -- UUID format
    fuel VARCHAR(255)
);

-- Gearboxes Table
CREATE TABLE gearboxes (
    id CHAR(36) PRIMARY KEY,  -- UUID format
    gearbox VARCHAR(255)
);

-- Cars Table
CREATE TABLE cars (
    id CHAR(36) PRIMARY KEY,  -- UUID format
    ad_name VARCHAR(255),
    brand_id CHAR(36),
    model_id CHAR(36),
    year INT,
    price INT,
    mileage INT,
    photo_url TEXT,
    type_id CHAR(36),
    gearbox_id CHAR(36),
    fuel_id CHAR(36),
    power INT,
    site_id CHAR(36),
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
    id CHAR(36) PRIMARY KEY,  -- UUID format
    client_id CHAR(36),
    brand_id CHAR(36),
    model_id CHAR(36),
    max_price FLOAT,
    min_price FLOAT,
    max_mileage INT,
    min_mileage INT,
    min_year INT,
    max_year INT,
    type_id CHAR(36),
    gearbox_id CHAR(36),
    max_power FLOAT,
    min_power FLOAT,
    fuel_id CHAR(36),
    telegram BOOLEAN,
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (brand_id) REFERENCES brands(id),
    FOREIGN KEY (model_id) REFERENCES models(id),
    FOREIGN KEY (type_id) REFERENCES types(id),
    FOREIGN KEY (gearbox_id) REFERENCES gearboxes(id),
    FOREIGN KEY (fuel_id) REFERENCES fuels(id)
);
