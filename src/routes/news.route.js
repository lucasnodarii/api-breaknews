import express from "express";
import newsController from "../controllers/news.controller.js";

const router = express.Router();

router.post("/", newsController.createNew);
router.get("/", newsController.findAllNews);

export default router;
