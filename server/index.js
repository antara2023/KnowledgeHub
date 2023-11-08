import express from "express";
import { config } from "dotenv";
import connectToDatabase from "./config/dbconfig.js";
import cookieParser from "cookie-parser";
import CourseRoutes from "./routes/courseRoutes.js";
import cors from "cors";

config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.use("/api/course", CourseRoutes);

app.use("*", (req, res) => {
  res.status(400).send("Page Not Found!");
});

app.listen(5030, async () => {
  await connectToDatabase();
  console.log("server is running");
});
