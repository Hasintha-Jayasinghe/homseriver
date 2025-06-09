import express from "express";
import dotenv from "dotenv";
import movieRouter from "./routes/movies";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.use("/movies", movieRouter);

app.get("/", (req, res) => {
  res.send("lol");
});

app.listen(PORT, () => {
  console.log("Server started");
});
