import express from "express";
import { saveUserOnboardingData } from "../controllers/userOnboardingController.js";

const router = express.Router();

router.get("/saveUserOnboardingData", saveUserOnboardingData);

export default router;
