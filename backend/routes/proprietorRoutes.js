import express from "express";
import { upload } from "../multer.js";
const router = express.Router();

import {
  createProprietor,
  loginProprietor,
  activateProprietor,
} from "../controllers/proprietorControllers.js";

router.post("/create-proprietor", upload.single("file"), createProprietor);
router.post("/login-proprietor", loginProprietor);
router.post("/activation", activateProprietor);

export default router;
