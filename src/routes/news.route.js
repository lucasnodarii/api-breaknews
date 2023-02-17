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
router.patch("/like/:id", authMiddleware.validateToken, newsController.likeNews);
router.patch("/comments/:id/", authMiddleware.validateToken, newsController.addComment);
router.patch("/comments/:idNews/:idComment", authMiddleware.validateToken, newsController.deleteComment);

router.delete("/:id", authMiddleware.validateToken, newsController.deleteNews);

export default router;
