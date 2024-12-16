import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongoDB.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//Middleware

app.use(express.json());
app.use(cors());

//API Endpoint

app.use("/api/admin", adminRouter);
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("App is Listening on PORT No :-", port));
