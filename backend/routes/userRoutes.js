import express from "express";
import { upload } from "../multer.js";
const router = express.Router();

import {
  createUser,
  loginUser,
  activateUser,
} from "../controllers/userControllers.js";

router.post("/create-user", upload.single("file"), createUser);
router.post("/login-user", loginUser);
router.post("/activation", activateUser);

export default router;
