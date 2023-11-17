import express from "express";
import {
  getUserSleepEfficiency,
  saveUserOnboardingData,
} from "../controllers/userOnboardingController.js";

const router = express.Router();

router.post("/saveUserOnboardingData", saveUserOnboardingData);
router.get("/getUserSleepEfficiency/:userId", getUserSleepEfficiency);

export default router;
