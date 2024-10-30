import { db_pool } from "../database/database.js";
import {
  getAllBrandsQuery,
  getAllFuelQuery,
  getAllGearQuery,
  getAllModelsQuery,
  getAllTypeQuery,
} from "../database/query_db.js";

class FilterService {
  async getBrands() {
    const [rows] = await db_pool.query(getAllBrandsQuery);
    return rows;
  }

  async getModels(brand) {
    const [rows] = await db_pool.query(`${getAllModelsQuery} ?;`, [brand]);
    return rows;
  }

  async getFuel() {
    const [rows] = await db_pool.query(getAllFuelQuery);
    return rows;
  }

  async getGear() {
    const [rows] = await db_pool.query(getAllGearQuery);
    return rows;
  }

  async getType() {
    const [rows] = await db_pool.query(getAllTypeQuery);
    return rows;
  }
}

export default new FilterService();
