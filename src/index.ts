import express from "express";
import dotenv from "dotenv";
import movieRouter from "./routes/movies";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/movies", movieRouter);

app.get("/", (req, res) => {
  res.send("lol");
});

app.listen(PORT, () => {
  console.log("Server started");
});
