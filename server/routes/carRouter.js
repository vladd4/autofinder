import express from "express";
import CarService from "../controllers/CarService.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  const { rows, totalPage, page } = await CarService.getCars(req);
  res.json({ cars: rows, totalPage: totalPage, currentPage: Number(page) });
});

router.post("/", async (req, res) => {
  const filteredCars = await CarService.filterCars(req.body);
  res.json(filteredCars);
});

router.post("/add", async (req, res) => {
  const addedCar = await CarService.addCar(req.body);
  res.json(addedCar);
});
