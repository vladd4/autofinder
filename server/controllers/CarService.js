import { db_pool } from "../database/database.js";
import { getAllCarsQuery, getFilterCarsQuery } from "../database/query_db.js";
import SavedSearchService from "./SavedSearchService.js";
import TelegramBotService from "./telegramBot/index.js";
import { v4 as uuidv4 } from "uuid";

class CarService {
  async getCars(req) {
    const { page } = req.query;
    const limit = 20;
    const offset = (page - 1) * limit;

    const [rows] = await db_pool.query(`${getAllCarsQuery} LIMIT ? OFFSET ?;`, [
      limit,
      offset,
    ]);

    const [totalPageCount] = await db_pool.query(
      "SELECT COUNT(*) AS count FROM cars;"
    );
    const totalPage = Math.ceil(totalPageCount[0]?.count / limit);
    return { rows, totalPage, page };
  }

  async getAllCars() {
    const [rows] = await db_pool.query(`${getAllCarsQuery};`);
    return rows;
  }

  async getCarById(carID) {
    const [rows] = await db_pool.query(
      `
      SELECT
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
      LEFT JOIN state state ON c.state_id = state.id
      WHERE c.id = ?;`,
      [carID]
    );
    return rows;
  }

  async filterCars(filters) {
    const whereClause = Object.keys(filters)
      .map((filter) => {
        if (
          (filter === "year" || filter === "power" || filter === "price") &&
          filters[filter].from &&
          filters[filter].to
        ) {
          return `c.${filter} BETWEEN ? AND ?`;
        } else {
          return `${filter} = ?`;
        }
      })
      .join(" AND ");

    const filterCarsQuery = `
      ${getFilterCarsQuery}
      ${whereClause ? `WHERE ${whereClause}` : ""};`;

    const values = Object.keys(filters).flatMap((filter) => {
      if (filter === "year" || filter === "power" || filter === "price") {
        return [filters[filter].from, filters[filter].to];
      }
      return [filters[filter]];
    });

    const [rows] = await db_pool.query(filterCarsQuery, values);
    return rows;
  }

  matchSavedSearch(userSaved, addedCar) {
    return userSaved.some((saved) => {
      for (const key in saved) {
        if (
          saved[key] !== null &&
          key !== "id" &&
          key !== "client_id" &&
          key !== "telegram"
        ) {
          if (
            key.startsWith("min_") &&
            parseInt(saved[key]) > parseInt(addedCar[key.replace("min_", "")])
          ) {
            return false;
          } else if (
            key.startsWith("max_") &&
            parseInt(saved[key]) < parseInt(addedCar[key.replace("max_", "")])
          ) {
            return false;
          } else if (saved[key] !== addedCar[key]) {
            return false;
          }
        }
      }
      return true;
    });
  }

  async addCar(body) {
    const carId = uuidv4();

    await db_pool.query(
      "INSERT INTO cars VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        carId,
        body.brand_id || null,
        body.model_id || null,
        body.year || null,
        body.price || null,
        body.mileage || null,
        body.state_id || null,
        body.photo_url || null,
        body.type_id || null,
        body.gearbox_id || null,
        body.fuel_id || null,
        body.power || null,
        body.site_id || null,
        body.link || null,
      ]
    );

    const addedCar = await this.getCarById(carId);
    const userSaved = await SavedSearchService.getSavedByUserTelegram(
      getTelegram()
    );

    if (this.matchSavedSearch(userSaved, addedCar[0])) {
      const chatId = TelegramBotService.getChatId();
      if (chatId) {
        await TelegramBotService.sendNewCar(addedCar[0], chatId);
      }
    }

    return addedCar[0];
  }
}

export default new CarService();
