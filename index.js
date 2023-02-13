import express from "express";
import userRouter from "./src/routes/user.route.js"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});