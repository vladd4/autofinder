import express from "express";
import SavedSearchService from "../controllers/SavedSearchService.js";

export const router = express.Router();

/**
 * @swagger
 * /api/v1/saved/{id}:
 *   get:
 *     summary: Get saved search by user ID
 *     description: Returns a saved search for a given user ID.
 *     tags:
 *        - saved cars
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The user ID for the saved search.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Saved search data for the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The unique ID of the saved search
 *                 client_id:
 *                   type: integer
 *                   description: The ID of the client who saved the search
 *                 brand_id:
 *                   type: integer
 *                   description: The ID of the car brand
 *                 model_id:
 *                   type: integer
 *                   description: The ID of the car model
 *                 max_price:
 *                   type: number
 *                   format: float
 *                   description: The maximum price for the saved search
 *                 min_price:
 *                   type: number
 *                   format: float
 *                   description: The minimum price for the saved search
 *                 max_mileage:
 *                   type: integer
 *                   description: The maximum mileage for the saved search
 *                 min_mileage:
 *                   type: integer
 *                   description: The minimum mileage for the saved search
 *                 min_year:
 *                   type: integer
 *                   description: The minimum year for the saved search
 *                 max_year:
 *                   type: integer
 *                   description: The maximum year for the saved search
 *                 type_id:
 *                   type: integer
 *                   description: The car type ID (e.g., sedan, SUV)
 *                 gearbox_id:
 *                   type: integer
 *                   description: The gearbox type ID (e.g., manual, automatic)
 *                 max_power:
 *                   type: number
 *                   format: float
 *                   description: The maximum power (horsepower) for the saved search
 *                 min_power:
 *                   type: number
 *                   format: float
 *                   description: The minimum power (horsepower) for the saved search
 *                 fuel_id:
 *                   type: integer
 *                   description: The fuel type ID (e.g., petrol, diesel)
 *                 telegram:
 *                   type: boolean
 *                   description: Whether the user has a Telegram notification preference
 *       404:
 *         description: Saved search not found for the given user ID
 *       500:
 *         description: Internal server error
 */
router.get("/:id", async (req, res) => {
  const saved = await SavedSearchService.getSavedByUserId(req.params.id);
  res.json(saved);
});

/**
 * @swagger
 * /api/v1/saved/cars/{id}:
 *   get:
 *     summary: Get saved cars by user ID
 *     description: Returns a list of saved cars based on the user ID's saved search criteria.
 *     tags:
 *        - saved cars
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The user ID for the saved cars.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of saved cars matching the user's saved search criteria
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The unique identifier of the car
 *                   ad_name:
 *                     type: string
 *                     description: The advertisement name for the car
 *                   brand_id:
 *                     type: integer
 *                     description: The ID of the car brand
 *                   model_id:
 *                     type: integer
 *                     description: The ID of the car model
 *                   year:
 *                     type: integer
 *                     description: The manufacturing year of the car
 *                   price:
 *                     type: integer
 *                     description: The price of the car
 *                   mileage:
 *                     type: integer
 *                     description: The mileage of the car
 *                   photo_url:
 *                     type: string
 *                     description: URL for the car's photo
 *                   type_id:
 *                     type: integer
 *                     description: The type ID of the car (e.g., sedan, SUV)
 *                   gearbox_id:
 *                     type: integer
 *                     description: The gearbox type ID of the car (e.g., manual, automatic)
 *                   fuel_id:
 *                     type: integer
 *                     description: The fuel type ID of the car (e.g., petrol, diesel)
 *                   power:
 *                     type: integer
 *                     description: The power (horsepower) of the car
 *                   site_id:
 *                     type: integer
 *                     description: The site ID where the car is listed
 *                   link:
 *                     type: string
 *                     description: A link to the car's listing
 *                   parsed_at:
 *                     type: string
 *                     format: date-time
 *                     description: The timestamp when the car data was parsed
 *       404:
 *         description: No saved cars found for the given user ID
 *       500:
 *         description: Internal server error
 */
router.get("/cars/:id", async (req, res) => {
  const savedCars = await SavedSearchService.getSavedCarsByUserId(
    req.params.id
  );
  res.json(savedCars);
});

/**
 * @swagger
 * /api/v1/saved:
 *   post:
 *     summary: Add a new saved search
 *     description: Adds a new saved search based on the provided criteria.
 *     tags:
 *        - saved cars
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               client_id:
 *                 type: integer
 *                 description: The ID of the client
 *               brand_id:
 *                 type: integer
 *                 description: The ID of the car brand
 *               model_id:
 *                 type: integer
 *                 description: The ID of the car model
 *               max_price:
 *                 type: number
 *                 format: float
 *                 description: The maximum price for the saved search
 *               min_price:
 *                 type: number
 *                 format: float
 *                 description: The minimum price for the saved search
 *               max_mileage:
 *                 type: integer
 *                 description: The maximum mileage for the saved search
 *               min_mileage:
 *                 type: integer
 *                 description: The minimum mileage for the saved search
 *               min_year:
 *                 type: integer
 *                 description: The minimum manufacturing year
 *               max_year:
 *                 type: integer
 *                 description: The maximum manufacturing year
 *               type_id:
 *                 type: integer
 *                 description: The type of the car (e.g., sedan, SUV)
 *               gearbox_id:
 *                 type: integer
 *                 description: The gearbox type (e.g., manual, automatic)
 *               fuel_id:
 *                 type: integer
 *                 description: The fuel type (e.g., petrol, diesel)
 *               max_power:
 *                 type: number
 *                 format: float
 *                 description: The maximum power (horsepower)
 *               min_power:
 *                 type: number
 *                 format: float
 *                 description: The minimum power (horsepower)
 *               telegram:
 *                 type: boolean
 *                 description: Whether the user wants Telegram notifications
 *     responses:
 *       201:
 *         description: Successfully added a new saved search
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Bad request if the input data is invalid
 *       500:
 *         description: Internal server error
 */
router.post("/", async (req, res) => {
  const added = await SavedSearchService.addSaved(req.body);
  res.status(201).json(added);
});

/**
 * @swagger
 * /api/v1/saved/telegram/{id}:
 *   put:
 *     summary: Update the Telegram field for a saved search by ID
 *     description: Updates the saved search's Telegram field based on the given ID.
 *     tags:
 *        - saved cars
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The saved search ID to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               telegram:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Successfully updated the Telegram field
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Bad request if the data is invalid
 *       404:
 *         description: Saved search not found for the given ID
 *       500:
 *         description: Internal server error
 */
router.put("/telegram/:id", async (req, res) => {
  const updated = await SavedSearchService.updateSavedTelegram(
    req.params.id,
    req.body
  );
  res.status(200).json(updated);
});

/**
 * @swagger
 * /api/v1/saved/telegram/{id}:
 *   put:
 *     summary: Update the Telegram field for a saved search by ID
 *     description: Updates the saved search's Telegram field based on the given ID.
 *     tags:
 *        - saved cars
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The saved search ID to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               telegram:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Successfully updated the Telegram field
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Bad request if the data is invalid
 *       404:
 *         description: Saved search not found for the given ID
 *       500:
 *         description: Internal server error
 */
router.put("/telegram/:id", async (req, res) => {
  const updated = await SavedSearchService.updateSavedTelegram(
    req.params.id,
    req.body
  );
  res.status(200).json(updated);
});

/**
 * @swagger
 * /api/v1/saved/{id}:
 *   delete:
 *     summary: Delete a saved search by ID
 *     description: Deletes the saved search corresponding to the given ID.
 *     tags:
 *        - saved cars
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the saved search to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully deleted the saved search
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Saved search not found for the given ID
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", async (req, res) => {
  const deleted = await SavedSearchService.deleteSavedbyId(req.params.id);
  res.json(deleted);
});
