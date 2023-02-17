import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./src/database/db.js";
import userRouter from "./src/routes/user.route.js";
import authRouter from "./src/routes/auth.route.js";
import newsRouter from "./src/routes/news.route.js";
import swaggerRouter from "./src/routes/swagger.router.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDatabase();
app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/news", newsRouter);
app.use("/docs", swaggerRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
