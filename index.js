import express from "express";
import userRouter from "./src/routes/user.route.js";
import connectDatabase from "./src/database/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDatabase();
app.use(express.json());
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
