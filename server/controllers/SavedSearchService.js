import { db_pool } from "../database/database.js";
import {
  deleteSavedQuery,
  getSavedForUser,
  getSavedForUserByTelegramQuery,
} from "../database/query_db.js";
import CarService from "./CarService.js";
import { v4 as uuidv4 } from "uuid";

class SavedSearchService {
  async getSavedByUserId(userID) {
    const [rows] = await db_pool.query(`${getSavedForUser} ?;`, [userID]);
    return rows;
  }

  async getSavedByUserTelegram(telegram) {
    const [rows] = await db_pool.query(`${getSavedForUserByTelegramQuery} ?;`, [
      telegram,
    ]);
    return rows;
  }

  async addSaved(params) {
    const id = uuidv4();

    const [rows] = await db_pool.query(
      "INSERT INTO saved_searches VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        id,
        params.client_id,
        params.brand_id || null,
        params.model_id || null,
        params.max_price || null,
        params.min_price || null,
        params.max_mileage || null,
        params.min_mileage || null,
        params.state_id || null,
        params.min_year || null,
        params.max_year || null,
        params.type_id || null,
        params.gearbox_id || null,
        params.max_power || null,
        params.min_power || null,
        params.fuel_id || null,
        params.telegram || 0,
      ]
    );
    return rows;
  }

  async deleteSavedById(savedID) {
    const [rows] = await db_pool.query(`${deleteSavedQuery} ?;`, [savedID]);
    return rows;
  }

  async getSavedCarsByUserId(userID) {
    const userSaved = await this.getSavedByUserId(userID);
    const allCars = await CarService.getAllCars();
    const result = [];

    allCars.forEach((car) => {
      if (CarService.allMatchV2(userSaved, car)) {
        result.push(car);
      }
    });

    return result;
  }

  async updateSavedTelegram(savedID, params) {
    const [rows] = await db_pool.query(
      `UPDATE saved_searches SET telegram = ? WHERE id = ?;`,
      [params.telegram, savedID]
    );
    return rows;
  }

  async updateSaved(savedID, params) {
    const updateQuery = `
      UPDATE saved_searches
      SET 
        brand_id = COALESCE(?, brand_id),
        model_id = COALESCE(?, model_id),
        max_price = COALESCE(?, max_price),
        min_price = COALESCE(?, min_price),
        state_id = COALESCE(?, state_id),
        min_year = COALESCE(?, min_year),
        max_year = COALESCE(?, max_year),
        type_id = COALESCE(?, type_id),
        gearbox_id = COALESCE(?, gearbox_id),
        fuel_id = COALESCE(?, fuel_id)
      WHERE id = ?;
    `;
    const values = [
      params.brand_id,
      params.model_id,
      params.max_price,
      params.min_price,
      params.state_id,
      params.min_year,
      params.max_year,
      params.type_id,
      params.gearbox_id,
      params.fuel_id,
      savedID,
    ];

    await db_pool.query(updateQuery, values);
    return await this.getSavedByUserId(params.userID);
  }
}

export default new SavedSearchService();
