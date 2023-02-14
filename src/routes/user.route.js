import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.findAll);
router.get("/:id", userController.findById);

export default router;
