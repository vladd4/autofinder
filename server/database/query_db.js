export const getAllCarsQuery = `SELECT
        c.id AS car_id,
        b.brand AS brand,
        m.model AS model,
        c.year,
        c.price,
        c.mileage,
        c.photo_url,
        g.gearbox AS gearbox,
        f.fuel AS fuel,
        c.power,
        site.name AS site_name,
        site.photo_url AS site_photo_url,
        state.state AS state,
        c.link,
        type.type
        FROM
        cars c
        LEFT JOIN brands b ON c.brand_id = b.id
        LEFT JOIN models m ON c.model_id = m.id
        LEFT JOIN gearboxes g ON c.gearbox_id = g.id
        LEFT JOIN fuels f ON c.fuel_id = f.id
        LEFT JOIN types type ON c.type_id = type.id
        LEFT JOIN sites site ON c.site_id = site.id
        LEFT JOIN state state ON c.state_id = state.id`;

export const getFilterCarsQuery = `SELECT
        c.id AS car_id,
        b.brand AS brand,
        m.model AS model,
        c.year,
        c.price,
        c.mileage,
        c.photo_url,
        g.gearbox AS gearbox,
        f.fuel AS fuel,
        c.power,
        site.name AS site_name,
        site.photo_url AS site_photo_url,
        state.state AS state,
        c.link,
        type.type
        FROM
        cars c
        JOIN brands b ON c.brand_id = b.id
        JOIN models m ON c.model_id = m.id
        JOIN gearboxes g ON c.gearbox_id = g.id
        JOIN fuels f ON c.fuel_id = f.id
        JOIN types type ON c.type_id = type.id
        JOIN sites site ON c.site_id = site.id
        JOIN state state ON c.state_id = state.id`;

export const getAllBrandsQuery = `SELECT id, brand as value FROM brands;`;
export const getAllModelsQuery = `SELECT 
        m.id AS id, 
        m.model AS value
        FROM models m
        JOIN brands b 
        ON m.brand_id = b.id
        WHERE b.brand = `;
export const getAllFuelQuery = `SELECT id, fuel as value FROM fuels;;`;
export const getAllGearQuery = `SELECT id, gearbox as value FROM gearboxes;`;
export const getAllStateQuery = `SELECT id, state as value FROM state;`;
export const getAllTypeQuery = `SELECT id, type as value FROM types;`;

export const getUser = `SELECT * FROM clients WHERE id = `;
export const getUserByEmailQuery = `SELECT * FROM clients WHERE email = `;
export const getUserByTelegramQuery = `SELECT * FROM clients WHERE telegram = `;

export const getSavedForUser = `SELECT 
        s.id, s.client_id, brands.brand, models.model, type.type, s.max_price, 
        s.min_price, s.min_year, s.max_year, s.min_mileage, s.max_mileage, s.min_power, s.max_power, 
        g.gearbox, f.fuel, state.state, s.telegram 
        FROM saved_searches s
                LEFT JOIN brands ON brands.id = s.brand_id
                LEFT JOIN models ON models.id = s.model_id
                LEFT JOIN gearboxes g ON s.gearbox_id = g.id
                LEFT JOIN fuels f ON s.fuel_id = f.id
                LEFT JOIN types type ON s.type_id = type.id
                LEFT JOIN state state ON s.state_id = state.id
        WHERE s.client_id = `;

export const deleteSavedQuery = `DELETE FROM saved_searches WHERE id = `;

export const getSavedForUserByTelegramQuery = `SELECT 
        s.id, s.client_id, brands.brand, models.model, type.type, s.max_price, 
        s.min_price, s.min_year, s.max_year, s.min_mileage, s.max_mileage, s.min_power, s.max_power, 
        g.gearbox, f.fuel, state.state, s.telegram 
        FROM saved_searches s
                LEFT JOIN brands ON brands.id = s.brand_id
                LEFT JOIN models ON models.id = s.model_id
                LEFT JOIN gearboxes g ON s.gearbox_id = g.id
                LEFT JOIN fuels f ON s.fuel_id = f.id
                LEFT JOIN types type ON s.type_id = type.id
                LEFT JOIN state state ON s.state_id = state.id
                LEFT JOIN clients cl ON s.client_id = cl.id
        WHERE s.telegram = 1 AND cl.telegram = `;
