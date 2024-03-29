import express from "express";
import { upload } from "../multer.js";
import { isAuthenticated } from "../middleware/auth.js";
const router = express.Router();

import {
  createUser,
  loginUser,
  activateUser,
  getUser,
  logoutUser
} from "../controllers/userControllers.js";

router.post("/create-user", upload.single("file"), createUser);
router.post("/login-user", loginUser);
router.post("/activation", activateUser);
router.get("/getuser", isAuthenticated, getUser);
router.get("/logout",  logoutUser);

export default router;
