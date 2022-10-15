import { Router } from "express";
import User from "../Model/user.model.js";

const router = Router();

router.get("/", async (req, res) => {
  const x = await User.find({});
  res.status(200).json({
    resultCode: 20000,
    resultDescription: "success",
    resultData: x,
  });
});

export default router;
