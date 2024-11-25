import express from "express";
import CarService from "../controllers/CarService.js";

export const router = express.Router();

/**
 * @swagger
 * /api/v1/cars:
 *   get:
 *     summary: Get a paginated list of cars
 *     description: Returns a paginated list of cars based on query parameters.
 *     tags:
 *        - cars
 *     parameters:
 *       - in: query
 *         name: page
 *         description: Page number for pagination (optional).
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *     responses:
 *       200:
 *         description: A list of cars with pagination info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 cars:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The unique identifier of the car
 *                       ad_name:
 *                         type: string
 *                         description: The advertisement name for the car
 *                       brand_id:
 *                         type: integer
 *                         description: The ID of the car brand
 *                       model_id:
 *                         type: integer
 *                         description: The ID of the car model
 *                       year:
 *                         type: integer
 *                         description: The manufacturing year of the car
 *                       price:
 *                         type: integer
 *                         description: The price of the car
 *                       mileage:
 *                         type: integer
 *                         description: The mileage of the car
 *                       photo_url:
 *                         type: string
 *                         description: URL for the car's photo
 *                       type_id:
 *                         type: integer
 *                         description: The type ID of the car (e.g., sedan, SUV)
 *                       gearbox_id:
 *                         type: integer
 *                         description: The gearbox type ID of the car (e.g., manual, automatic)
 *                       fuel_id:
 *                         type: integer
 *                         description: The fuel type ID of the car (e.g., petrol, diesel)
 *                       power:
 *                         type: integer
 *                         description: The power (horsepower) of the car
 *                       site_id:
 *                         type: integer
 *                         description: The site ID where the car is listed
 *                       link:
 *                         type: string
 *                         description: A link to the car's listing
 *                       parsed_at:
 *                         type: string
 *                         format: date-time
 *                         description: The timestamp when the car data was parsed
 *                 totalPage:
 *                   type: integer
 *                   description: Total number of pages in the pagination
 *                 currentPage:
 *                   type: integer
 *                   description: The current page number
 *       500:
 *         description: Internal server error
 */
router.get("/", async (req, res) => {
  const { rows, totalPage, page } = await CarService.getCars(req);
  res.json({ cars: rows, totalPage: totalPage, currentPage: Number(page) });
});

/**
 * @swagger
 * /api/v1/cars:
 *   post:
 *     summary: Filter cars based on criteria
 *     description: Filters cars based on the provided parameters.
 *     tags:
 *       - cars
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *                 description: The brand of the car to filter by.
 *               model:
 *                 type: string
 *                 description: The model of the car to filter by.
 *               price:
 *                 type: object
 *                 description: The price range to filter cars by.
 *                 properties:
 *                   from:
 *                     type: integer
 *                     description: Minimum price for the car.
 *                   to:
 *                     type: integer
 *                     description: Maximum price for the car.
 *               year:
 *                 type: object
 *                 description: The year range to filter cars by.
 *                 properties:
 *                   from:
 *                     type: integer
 *                     description: Minimum manufacturing year.
 *                   to:
 *                     type: integer
 *                     description: Maximum manufacturing year.
 *     responses:
 *       200:
 *         description: A list of filtered cars
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
 *       400:
 *         description: Invalid input data
 */
router.post("/", async (req, res) => {
  const filteredCars = await CarService.filterCars(req.body);
  res.json(filteredCars);
});

/**
 * @swagger
 * /api/v1/cars/add:
 *   post:
 *     summary: Add a new car
 *     description: Adds a new car to the database and notifies users if the car matches saved searches.
 *     tags:
 *       - cars
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand_id:
 *                 type: integer
 *                 description: The ID of the car's brand
 *               model_id:
 *                 type: integer
 *                 description: The ID of the car's model
 *               year:
 *                 type: integer
 *                 description: The manufacturing year of the car
 *               price:
 *                 type: integer
 *                 description: The price of the car
 *               mileage:
 *                 type: integer
 *                 description: The mileage of the car
 *               photo_url:
 *                 type: string
 *                 description: URL for the car's photo
 *               type_id:
 *                 type: integer
 *                 description: The type ID of the car (e.g., sedan, SUV)
 *               gearbox_id:
 *                 type: integer
 *                 description: The gearbox type ID of the car (e.g., manual, automatic)
 *               fuel_id:
 *                 type: integer
 *                 description: The fuel type ID of the car (e.g., petrol, diesel)
 *               power:
 *                 type: integer
 *                 description: The power (horsepower) of the car
 *               site_id:
 *                 type: integer
 *                 description: The site ID where the car is listed
 *               link:
 *                 type: string
 *                 description: A link to the car's listing
 *     responses:
 *       200:
 *         description: The car that was added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 car_id:
 *                   type: string
 *                   description: The unique identifier of the car
 *                 brand_id:
 *                   type: integer
 *                   description: The ID of the car's brand
 *                 model_id:
 *                   type: integer
 *                   description: The ID of the car's model
 *                 year:
 *                   type: integer
 *                   description: The manufacturing year of the car
 *                 price:
 *                   type: integer
 *                   description: The price of the car
 *                 mileage:
 *                   type: integer
 *                   description: The mileage of the car
 *                 photo_url:
 *                   type: string
 *                   description: URL for the car's photo
 *                 type_id:
 *                   type: integer
 *                   description: The type ID of the car (e.g., sedan, SUV)
 *                 gearbox_id:
 *                   type: integer
 *                   description: The gearbox type ID of the car (e.g., manual, automatic)
 *                 fuel_id:
 *                   type: integer
 *                   description: The fuel type ID of the car (e.g., petrol, diesel)
 *                 power:
 *                   type: integer
 *                   description: The power (horsepower) of the car
 *                 site_id:
 *                   type: integer
 *                   description: The site ID where the car is listed
 *                 link:
 *                   type: string
 *                   description: A link to the car's listing
 *                 parsed_at:
 *                   type: string
 *                   format: date-time
 *                   description: The timestamp when the car data was parsed
 *       400:
 *         description: Invalid car data
 *       500:
 *         description: Internal server error
 */
router.post("/add", async (req, res) => {
  const addedCar = await CarService.addCar(req.body);
  res.json(addedCar);
});
