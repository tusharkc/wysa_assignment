import express from "express";
import {
  getUserSleepEfficiency,
  registerUser,
  saveUserOnboardingData,
} from "../controllers/userOnboardingController.js";

const router = express.Router();

router.post("/saveUserOnboardingData", saveUserOnboardingData);
router.get("/getUserSleepEfficiency/:userId", getUserSleepEfficiency);
router.post("/register", registerUser);

export default router;
