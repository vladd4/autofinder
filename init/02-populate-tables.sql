-- Insert data into Brands Table
INSERT INTO brands (id, brand)
VALUES
    (1, 'Toyota'),
    (2, 'Ford'),
    (3, 'Honda'),
    (4, 'BMW'),
    (5, 'Mercedes');

-- Insert data into Models Table
INSERT INTO models (id, model, brand_id)
VALUES
    (1, 'Corolla', 1),
    (2, 'Camry', 1),
    (3, 'F-150', 2),
    (4, 'Mustang', 2),
    (5, 'Civic', 3),
    (6, 'Accord', 3),
    (7, 'X5', 4),
    (8, '3 Series', 4),
    (9, 'C-Class', 5),
    (10, 'E-Class', 5);

-- Insert data into Sites Table
INSERT INTO sites (id, name, photo_url)
VALUES
    (1, 'AutoTrader', 'https://example.com/auto_trader.jpg'),
    (2, 'CarGurus', 'https://example.com/car_gurus.jpg'),
    (3, 'eBay Motors', 'https://example.com/ebay_motors.jpg');

-- Insert data into Types Table
INSERT INTO types (id, type)
VALUES
    (1, 'Sedan'),
    (2, 'SUV'),
    (3, 'Truck'),
    (4, 'Coupe'),
    (5, 'Hatchback');

-- Insert data into Fuels Table
INSERT INTO fuels (id, fuel)
VALUES
    (1, 'Petrol'),
    (2, 'Diesel'),
    (3, 'Electric'),
    (4, 'Hybrid');

-- Insert data into Gearboxes Table
INSERT INTO gearboxes (id, gearbox)
VALUES
    (1, 'Manual'),
    (2, 'Automatic'),
    (3, 'CVT');

-- Insert data into Cars Table
INSERT INTO cars (id, ad_name, brand_id, model_id, year, price, mileage, photo_url, type_id, gearbox_id, fuel_id, power, site_id, link, parsed_at)
VALUES
    ('uuid1', '2020 Toyota Corolla for Sale', 1, 1, 2020, 20000, 15000, 'https://example.com/toyota_corolla.jpg', 1, 2, 1, 150, 1, 'https://example.com/toyota_corolla_ad', '2024-12-15 12:00:00'),
    ('uuid2', '2019 Ford F-150', 2, 3, 2019, 30000, 30000, 'https://example.com/ford_f150.jpg', 3, 1, 2, 400, 2, 'https://example.com/ford_f150_ad', '2024-12-15 12:05:00'),
    ('uuid3', '2021 Honda Civic', 3, 5, 2021, 22000, 5000, 'https://example.com/honda_civic.jpg', 1, 2, 1, 180, 3, 'https://example.com/honda_civic_ad', '2024-12-15 12:10:00'),
    ('uuid4', '2020 BMW X5', 4, 7, 2020, 45000, 20000, 'https://example.com/bmw_x5.jpg', 2, 2, 1, 300, 1, 'https://example.com/bmw_x5_ad', '2024-12-15 12:15:00'),
    ('uuid5', '2022 Mercedes E-Class', 5, 10, 2022, 50000, 10000, 'https://example.com/mercedes_e_class.jpg', 4, 1, 4, 350, 2, 'https://example.com/mercedes_e_class_ad', '2024-12-15 12:20:00');
