USE five;

-- Insert data into Brands Table
INSERT INTO brands (id, brand)
VALUES
    ('a3e3e1b7-cd3f-46f4-8a1f-3ffb4b0b7686', 'Toyota'),
    ('d7f5fe4c-5f35-41da-90d5-3a83d8d85b21', 'Ford'),
    ('4739f5c5-12ab-4a2b-b013-1b0a1da25be1', 'Honda'),
    ('7fe0f79c-e34e-41c5-8046-1f73e15e2ba5', 'BMW'),
    ('6c85bc67-df8e-4690-bc8b-df3b869b5a3f', 'Mercedes');

-- Insert data into Models Table
INSERT INTO models (id, model, brand_id)
VALUES
    ('1f66c2e2-93b0-4a93-9542-b7c46e6e22d8', 'Corolla', 'a3e3e1b7-cd3f-46f4-8a1f-3ffb4b0b7686'),
    ('13fe0f68-b928-4c1e-9a6e-e4289b82920e', 'Camry', 'a3e3e1b7-cd3f-46f4-8a1f-3ffb4b0b7686'),
    ('fb20fce9-c408-42c8-9d56-b7e8c24947e2', 'F-150', 'd7f5fe4c-5f35-41da-90d5-3a83d8d85b21'),
    ('b28c01a1-5327-4707-97b2-cad4e7b0c358', 'Mustang', 'd7f5fe4c-5f35-41da-90d5-3a83d8d85b21'),
    ('8a6e8961-bdf6-4635-b0f9-3b1687b7cb59', 'Civic', '4739f5c5-12ab-4a2b-b013-1b0a1da25be1'),
    ('ee194b77-3e29-4b0d-80f9-b3e5adcf370d', 'Accord', '4739f5c5-12ab-4a2b-b013-1b0a1da25be1'),
    ('d7b944c0-6325-4636-81e1-60e717f395d0', 'X5', '7fe0f79c-e34e-41c5-8046-1f73e15e2ba5'),
    ('eb5cf8b4-1c13-44c2-820f-3b04f02db0e5', '3 Series', '7fe0f79c-e34e-41c5-8046-1f73e15e2ba5'),
    ('6b1fe087-f7bc-4f9f-b4f0-054f9d8f7352', 'C-Class', '6c85bc67-df8e-4690-bc8b-df3b869b5a3f'),
    ('41b01392-b3b4-47a6-a17d-d12f9c70561e', 'E-Class', '6c85bc67-df8e-4690-bc8b-df3b869b5a3f');

-- Insert data into Sites Table
INSERT INTO sites (id, name, photo_url)
VALUES
    ('d010b77b-c24a-417d-b60c-22e4139fc6a7', 'AutoTrader', 'https://m.atcdn.co.uk/ect/media/%7Bresize%7D/6261c7bb2152499fb8c6006c9b8497c4.jpg'),
    ('7bfc35a7-eef6-47ae-bcd4-28d3834e1b7a', 'CarGurus', 'https://play-lh.googleusercontent.com/a7v7-prBpwu0VyQy7qkc-VArU_WTUd6mOMOFtijebuSmitzjvzzB_yI-lA5AnQeUlEEG'),
    ('7fd44ad4-bce3-4fd2-9c88-c2110cd76758', 'eBay Motors', 'https://play-lh.googleusercontent.com/EZocI6jrz3WBfZUAYGXRTyWUbOpJzqQC8ILAoGqeW3kiOLJB19FR1v5TeTPYwfvUNDg');

-- Insert data into Types Table
INSERT INTO types (id, type)
VALUES
    ('a499a3c7-0d73-45ca-93c0-7a5515a01599', 'Sedan'),
    ('282fd2e0-4023-4cc2-a6c1-f22823d089fb', 'SUV'),
    ('215db897-b96f-4853-90ad-0cb95f99a001', 'Truck'),
    ('f4f332b9-54d7-4630-b577-982d7c7d2be1', 'Coupe'),
    ('ab0bfe6b-b52e-42e1-b670-9484c82b49f5', 'Hatchback');

-- Insert data into Fuels Table
INSERT INTO fuels (id, fuel)
VALUES
    ('2879f76b-0c8c-42b0-9b59-c440f5450b2f', 'Petrol'),
    ('ef329927-8d69-4175-93a1-cf10f33a58f7', 'Diesel'),
    ('8a4b42b2-dc22-4f9a-a1ff-9b179d9e5679', 'Electric'),
    ('1f67a3a2-e7f4-45c7-8a42-eccaa11a2e79', 'Hybrid');

-- Insert data into Gearboxes Table
INSERT INTO gearboxes (id, gearbox)
VALUES
    ('f6a38362-299f-47b0-b2c3-df64e75c9285', 'Manual'),
    ('e7f128e5-7383-41d4-847b-bb115faad5f0', 'Automatic'),
    ('9c459d16-e90e-43c0-99c4-e91e4047d61e', 'CVT');

-- Insert data into Cars Table
INSERT INTO cars (id, ad_name, brand_id, model_id, year, price, mileage, photo_url, type_id, gearbox_id, fuel_id, power, site_id, link, parsed_at)
VALUES
    ('14a2c7fa-facf-4cf9-91ca-3e40284619d0', '2020 Toyota Corolla for Sale', 'a3e3e1b7-cd3f-46f4-8a1f-3ffb4b0b7686', '1f66c2e2-93b0-4a93-9542-b7c46e6e22d8', 2020, 20000, 15000, 'https://www.motortrend.com/uploads/sites/11/2019/10/2020-toyota-corolla-xse-rear-three-quater-11.jpg', 'a499a3c7-0d73-45ca-93c0-7a5515a01599', 'e7f128e5-7383-41d4-847b-bb115faad5f0', '2879f76b-0c8c-42b0-9b59-c440f5450b2f', 150, 'd010b77b-c24a-417d-b60c-22e4139fc6a7', 'https://example.com/toyota_corolla_ad', '2024-12-15 12:00:00'),
    ('2b6d6b75-f17f-4296-b741-d50bb1252924', '2019 Ford F-150', 'd7f5fe4c-5f35-41da-90d5-3a83d8d85b21', 'fb20fce9-c408-42c8-9d56-b7e8c24947e2', 2019, 30000, 30000, 'https://media.ford.com/content/fordmedia/fna/us/en/products/trucks/f-150/2019-ford-f-150/jcr:content/content/media-section-parsys/textimage_5da7/image.img.951.535.jpg/1550254240150.jpg', '215db897-b96f-4853-90ad-0cb95f99a001', 'f6a38362-299f-47b0-b2c3-df64e75c9285', 'ef329927-8d69-4175-93a1-cf10f33a58f7', 400, '7bfc35a7-eef6-47ae-bcd4-28d3834e1b7a', 'https://example.com/ford_f150_ad', '2024-12-15 12:05:00'),
    ('ed8cbd31-3d96-40ab-a620-cc1534ad5192', '2021 Honda Civic', '4739f5c5-12ab-4a2b-b013-1b0a1da25be1', '8a6e8961-bdf6-4635-b0f9-3b1687b7cb59', 2021, 22000, 5000, 'https://media.ed.edmunds-media.com/honda/civic/2021/oem/2021_honda_civic_sedan_touring_fq_oem_1_1600.jpg', 'a499a3c7-0d73-45ca-93c0-7a5515a01599', 'e7f128e5-7383-41d4-847b-bb115faad5f0', '2879f76b-0c8c-42b0-9b59-c440f5450b2f', 180, '7fd44ad4-bce3-4fd2-9c88-c2110cd76758', 'https://example.com/honda_civic_ad', '2024-12-15 12:10:00'),
    ('314fe378-7425-42b2-8dff-1d836e24668c', '2020 BMW X5', '7fe0f79c-e34e-41c5-8046-1f73e15e2ba5', 'd7b944c0-6325-4636-81e1-60e717f395d0', 2020, 45000, 20000, 'https://i.gaw.to/vehicles/photos/40/19/401956-2020-bmw-x5.jpg?1024x640', '282fd2e0-4023-4cc2-a6c1-f22823d089fb', 'e7f128e5-7383-41d4-847b-bb115faad5f0', '2879f76b-0c8c-42b0-9b59-c440f5450b2f', 300, 'd010b77b-c24a-417d-b60c-22e4139fc6a7', 'https://example.com/bmw_x5_ad', '2024-12-15 12:15:00'),
    ('508a3c15-d4e9-44c1-9f34-b581f571c9b2', '2022 Mercedes E-Class', '6c85bc67-df8e-4690-bc8b-df3b869b5a3f', '6b1fe087-f7bc-4f9f-b4f0-054f9d8f7352', 2022, 50000, 10000, 'https://hips.hearstapps.com/hmg-prod/images/2021-mercedes-benz-e450-4matic-sedan-107-1604280340.jpg?crop=0.728xw:0.613xh;0.181xw,0.240xh&resize=2048:*', 'f4f332b9-54d7-4630-b577-982d7c7d2be1', 'f6a38362-299f-47b0-b2c3-df64e75c9285', '1f67a3a2-e7f4-45c7-8a42-eccaa11a2e79', 350, '7bfc35a7-eef6-47ae-bcd4-28d3834e1b7a', 'https://example.com/mercedes_e_class_ad', '2024-12-15 12:20:00');
