import express from "express";
import FilterService from "../controllers/FilterService.js";

export const router = express.Router();

router.get("/brands", async (req, res) => {
  const brands = await FilterService.getBrands();
  res.json(brands);
});
router.get("/models", async (req, res) => {
  const models = await FilterService.getModels(req.query.brand);
  res.json(models);
});
router.get("/fuel", async (req, res) => {
  const fuels = await FilterService.getFuel();
  res.json(fuels);
});
router.get("/gear", async (req, res) => {
  const gears = await FilterService.getGear();
  res.json(gears);
});
router.get("/type", async (req, res) => {
  const states = await FilterService.getType();
  res.json(states);
});
