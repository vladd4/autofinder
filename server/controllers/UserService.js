import { db_pool } from "../database/database.js";
import {
  getUser,
  getUserByEmailQuery,
  getUserByTelegramQuery,
} from "../database/query_db.js";
import { v4 as uuidv4 } from "uuid";

class UserService {
  async getUserById(id) {
    const [rows] = await db_pool.query(`${getUser} ?;`, [id]);
    return rows[0];
  }

  async getUserByEmail(email) {
    const [rows] = await db_pool.query(`${getUserByEmailQuery} ?;`, [email]);
    return rows[0];
  }

  async getUserByTelegram(telegram) {
    const [rows] = await db_pool.query(`${getUserByTelegramQuery} ?;`, [
      telegram,
    ]);
    return rows[0];
  }

  async updateUserById(updateData, id) {
    const updateQuery = `
      UPDATE clients
      SET 
        name = COALESCE(?, name),
        phone = COALESCE(?, phone),
        telegram = COALESCE(?, telegram)
      WHERE id = ?;
    `;
    const values = [updateData.name, updateData.phone, updateData.telegram, id];
    const [result] = await db_pool.query(updateQuery, values);
    return result;
  }

  async addUser(userData) {
    const userId = uuidv4();

    const addQuery = `
      INSERT INTO clients (id, email, name, phone, telegram, avatar)
      VALUES (?, ?, ?, ?, ?, ?);
    `;
    const values = [
      userId,
      userData.email || null,
      userData.name || null,
      userData.phone || null,
      userData.telegram || null,
      userData.avatar || null,
    ];

    const { rows } = await db_pool.query(addQuery, values);
    return rows;
  }
}

export default new UserService();
