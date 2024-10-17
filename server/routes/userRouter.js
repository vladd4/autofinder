import express from "express";
import UserService from "../controllers/UserService.js";

export const router = express.Router();

router.get("/id/:id", async (req, res) => {
  const user = await UserService.getUserById(req.params.id);
  res.json(user);
});
router.get("/:email", async (req, res) => {
  const user = await UserService.getUserByEmail(req.params.email);
  res.json(user);
});
router.post("/edit/:id", async (req, res) => {
  const updatedUser = await UserService.updateUserById(req.body, req.params.id);
  res.json(updatedUser);
});
router.post("/add", async (req, res) => {
  const addedUser = await UserService.addUser(req.body);
  res.json(addedUser);
});
