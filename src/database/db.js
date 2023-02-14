import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;


const connectDatabase = async () => {
  console.log("Waiting connection with database");
  mongoose.set('strictQuery', true);

  try {
    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPass}@cluster0.vjdrnyp.mongodb.net/?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDatabase;
