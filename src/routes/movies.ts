import { Router } from "express";
import { readdir } from "fs";

const router = Router();

router.get("/getall", (req, res) => {
  readdir(process.env.MEDIA_PATH + "/movies", (e, files) => {
    if (e) {
      res.send({ code: 0, msg: "error" + " " + e });
    } else {
      const filtered = files.map((file) => {
        if (file.split(" ")[0] !== "IGNORE") {
          return file;
        }
      });
      res.send({ code: 1, movies: filtered });
    }
  });
});

router.get("/poster/:name", (req, res) => {
  const { name } = req.params;

  res.sendFile(process.env.MEDIA_PATH + "/posters/" + name + ".jpg");
});

export default router;
