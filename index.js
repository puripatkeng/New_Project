import express from "express";
import fs from "fs";
import path from "path";
import * as dotenv from "dotenv";
import morgan from "morgan";
import { fileURLToPath } from "url";
import userRouter from "./Route/user.js";
import mongoose from "mongoose";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const port = process.env.port || 8000;
const app = express();

await mongoose
  .connect(
    "URL"
  )
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.use(
  morgan("common", {
    stream: fs.createWriteStream(path.join(__dirname, "access.log"), {
      flags: "a",
    }),
  })
);

app.use("/api", userRouter);

app.listen(port, () => {
  console.log(`Server running in port:${port}`);
});
