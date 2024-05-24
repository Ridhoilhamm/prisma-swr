import express from "express";
import {
  getUser,
  getUserbyId,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();
router.get("/user", getUser);
router.get("/user/:id", getUserbyId);
router.post("/user", createUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
