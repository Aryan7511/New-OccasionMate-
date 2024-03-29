import express from "express";
import { upload } from "../multer.js";
import { isProprietor } from "../middleware/auth.js";
const router = express.Router();

import {
  createProprietor,
  loginProprietor,
  activateProprietor,
  getProprietor,
  logoutProprietor,
} from "../controllers/proprietorControllers.js";

router.post("/create-proprietor", upload.single("file"), createProprietor);
router.post("/login-proprietor", loginProprietor);
router.post("/activation", activateProprietor);
router.get("/getProprietor", isProprietor, getProprietor);
router.get("/logout", logoutProprietor);

export default router;
