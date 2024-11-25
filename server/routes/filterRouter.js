import express from "express";
import FilterService from "../controllers/FilterService.js";

export const router = express.Router();

/**
 * @swagger
 * /api/v1/filters/brands:
 *   get:
 *     summary: Get a list of car brands
 *     description: Returns a list of car brands available for filtering.
 *     tags:
 *        - filters
 *     responses:
 *       200:
 *         description: A list of car brands
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                    id:
 *                      type: string
 *                    value:
 *                      type: string
 *       500:
 *         description: Internal server error
 */
router.get("/brands", async (req, res) => {
  const brands = await FilterService.getBrands();
  res.json(brands);
});

/**
 * @swagger
 * /api/v1/filters/models:
 *   get:
 *     summary: Get a list of car models by brand
 *     description: Returns a list of car models filtered by the provided brand.
 *     tags:
 *        - filters
 *     parameters:
 *       - in: query
 *         name: brand
 *         description: The brand to filter the models by.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of car models for the specified brand
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                    id:
 *                      type: string
 *                    value:
 *                      type: string
 *       400:
 *         description: Bad request if the brand parameter is missing or invalid
 *       500:
 *         description: Internal server error
 */
router.get("/models", async (req, res) => {
  const models = await FilterService.getModels(req.query.brand);
  res.json(models);
});

/**
 * @swagger
 * /api/v1/filters/fuel:
 *   get:
 *     summary: Get a list of fuel types
 *     description: Returns a list of fuel types available for filtering.
 *     tags:
 *        - filters
 *     responses:
 *       200:
 *         description: A list of fuel types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                    id:
 *                      type: string
 *                    value:
 *                      type: string
 *       500:
 *         description: Internal server error
 */
router.get("/fuel", async (req, res) => {
  const fuels = await FilterService.getFuel();
  res.json(fuels);
});

/**
 * @swagger
 * /api/v1/filters/gear:
 *   get:
 *     summary: Get a list of gearbox types
 *     description: Returns a list of gearbox types available for filtering.
 *     tags:
 *        - filters
 *     responses:
 *       200:
 *         description: A list of gearbox types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                    id:
 *                      type: string
 *                    value:
 *                      type: string
 *       500:
 *         description: Internal server error
 */
router.get("/gear", async (req, res) => {
  const gears = await FilterService.getGear();
  res.json(gears);
});

/**
 * @swagger
 * /api/v1/filters/type:
 *   get:
 *     summary: Get a list of car types
 *     description: Returns a list of car types available for filtering.
 *     tags:
 *        - filters
 *     responses:
 *       200:
 *         description: A list of car types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                    id:
 *                      type: string
 *                    value:
 *                      type: string
 *       500:
 *         description: Internal server error
 */
router.get("/type", async (req, res) => {
  const states = await FilterService.getType();
  res.json(states);
});
