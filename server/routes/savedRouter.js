import express from "express";
import SavedSearchService from "../controllers/SavedSearchService.js";

export const router = express.Router();

router.get("/:id", async (req, res) => {
  const saved = await SavedSearchService.getSavedByUserId(req.params.id);
  res.json(saved);
});
router.get("/cars/:id", async (req, res) => {
  const savedCars = await SavedSearchService.getSavedCarsByUserId(
    req.params.id
  );
  res.json(savedCars);
});
router.post("/", async (req, res) => {
  const added = await SavedSearchService.addSaved(req.body);
  res.status(201).json(added);
});
router.put("/telegram/:id", async (req, res) => {
  const updated = await SavedSearchService.updateSavedTelegram(
    req.params.id,
    req.body
  );
  res.status(200).json(updated);
});
router.put("/:id", async (req, res) => {
  const updated = await SavedSearchService.updateSaved(req.params.id, req.body);
  res.status(200).json(updated);
});
router.delete("/:id", async (req, res) => {
  const deleted = await SavedSearchService.deleteSavedbyId(req.params.id);
  res.json(deleted);
});
