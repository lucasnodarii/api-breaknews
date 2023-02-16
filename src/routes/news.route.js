import express from "express";
import newsController from "../controllers/news.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware.validateToken, newsController.createNew);
router.get("/", newsController.findAllNews);
router.get("/top", newsController.topNews);
router.get("/search", newsController.findByTitle);
router.get("/byUser", authMiddleware.validateToken, newsController.findByUser);
router.get("/:id", authMiddleware.validateToken, newsController.findById);
router.patch("/:id", authMiddleware.validateToken, newsController.updateNews);

export default router;
