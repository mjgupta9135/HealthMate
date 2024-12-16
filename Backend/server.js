import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongoDB.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

const app = express();
const PORT = process.env.PORT || 8000;

//Middleware

app.use(express.json());
app.use(cors());

//API Endpoint
app.use("/api/admin", adminRouter);

app.listen(PORT, () => {
  connectCloudinary();
  connectDB();
  console.log(`App is listening on port ${PORT}`);
});
