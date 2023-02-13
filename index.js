import express from "express";
import userRouter from "./src/routes/user.route.js"

const app = express();

app.use('/', userRouter);

app.listen(3000);