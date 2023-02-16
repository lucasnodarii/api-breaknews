import express from "express";
import newsController from "../controllers/news.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware.validateToken, newsController.createNew);
router.get("/", newsController.findAllNews);
router.get("/top", newsController.topNews);

export default router;
