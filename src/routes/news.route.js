import express from "express";
import newsController from "../controllers/news.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware.validateToken, newsController.createNew);
router.get("/", newsController.findAllNews);
router.get("/top", newsController.topNews);
router.get("/search", newsController.findByTitle);
router.get("/:id", authMiddleware.validateToken, newsController.findById);

export default router;
