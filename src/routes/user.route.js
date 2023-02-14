import express from "express";
import userController from "../controllers/user.controller.js";
import userMiddlewares from "../middlewares/global.middlewares.js";

const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.findAll);
router.get("/:id", userMiddlewares.validateId, userMiddlewares.validateUser, userController.findById);
router.patch("/:id", userMiddlewares.validateId, userMiddlewares.validateUser, userController.updateById);

export default router;
