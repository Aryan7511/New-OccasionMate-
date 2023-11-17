import express from "express";
const router = express.Router();

import {
  validateAndOtpSender,
  validateOtp,
  changePassword,
} from "../controllers/passwordResetControllers.js";

router.post("/forgotPassword", validateAndOtpSender);
router.post("/validateOtp", validateOtp);
router.put("/changePassword", changePassword);

export default router;
