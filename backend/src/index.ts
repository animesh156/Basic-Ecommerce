import express from "express";
import { initDB } from "./db/dbInit";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

const PORT = process.env.PORT || 5100;

(async () => {
  await initDB();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();
