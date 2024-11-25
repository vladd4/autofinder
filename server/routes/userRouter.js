import express from "express";
import UserService from "../controllers/UserService.js";

export const router = express.Router();

/**
 * @swagger
 * /api/v1/user/id/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieves a user based on their ID.
 *     tags:
 *       - user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The user ID to fetch.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The user with the specified ID
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    id:
 *                      type: string
 *                    name:
 *                      type: string
 *                    email:
 *                      type: string
 *                    phone:
 *                      type: string
 *                    telegram:
 *                      type: string
 *                    avatar:
 *                      type: string
 *       404:
 *         description: User not found for the given ID
 *       500:
 *         description: Internal server error
 */
router.get("/id/:id", async (req, res) => {
  const user = await UserService.getUserById(req.params.id);
  res.json(user);
});

/**
 * @swagger
 * /api/v1/user/{email}:
 *   get:
 *     summary: Get user by email
 *     description: Retrieves a user based on their email address.
 *     tags:
 *       - user
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: The user's email address to fetch.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The user with the specified email
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    id:
 *                      type: string
 *                    name:
 *                      type: string
 *                    email:
 *                      type: string
 *                    phone:
 *                      type: string
 *                    telegram:
 *                      type: string
 *                    avatar:
 *                      type: string
 *       404:
 *         description: User not found for the given email
 *       500:
 *         description: Internal server error
 */
router.get("/:email", async (req, res) => {
  const user = await UserService.getUserByEmail(req.params.email);
  res.json(user);
});

/**
 * @swagger
 * /api/v1/user/edit/{id}:
 *   post:
 *     summary: Update user by ID
 *     description: Updates user details based on the provided user ID.
 *     tags:
 *        - user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The user ID to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated the user
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    id:
 *                      type: string
 *                    name:
 *                      type: string
 *                    email:
 *                      type: string
 *                    phone:
 *                      type: string
 *                    telegram:
 *                      type: string
 *                    avatar:
 *                      type: string
 *       400:
 *         description: Invalid data provided for update
 *       404:
 *         description: User not found for the given ID
 *       500:
 *         description: Internal server error
 */
router.post("/edit/:id", async (req, res) => {
  const updatedUser = await UserService.updateUserById(req.body, req.params.id);
  res.json(updatedUser);
});

/**
 * @swagger
 * /api/v1/user/add:
 *   post:
 *     summary: Add a new user
 *     description: Creates a new user based on the provided user data.
 *     tags:
 *        - user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               telegram:
 *                 type: string
 *               phone:
 *                 type: string
 *               avatar:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully added a new user
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    id:
 *                      type: string
 *                    name:
 *                      type: string
 *                    email:
 *                      type: string
 *                    phone:
 *                      type: string
 *                    telegram:
 *                      type: string
 *                    avatar:
 *                      type: string
 *       400:
 *         description: Invalid data provided for user creation
 *       500:
 *         description: Internal server error
 */
router.post("/add", async (req, res) => {
  const addedUser = await UserService.addUser(req.body);
  res.json(addedUser);
});
