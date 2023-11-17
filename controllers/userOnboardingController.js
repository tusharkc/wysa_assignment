import moment from "moment";
import { UserOnBoardingDataModel } from "../models/userOnBoardingData.js";
import { timeInBedInHours } from "../utils/index.js";
import bcrypt from "bcrypt";

export const saveUserOnboardingData = async (req, res) => {
  try {
    const {
      changesArr,
      weekSelection,
      sleepTime,
      wakeUpTime,
      timeInBedInHours,
      userId,
    } = req.body;

    const userSentData = new UserOnBoardingDataModel({
      userId,
      weekSelection,
      sleepTime,
      wakeUpTime,
      totalSleepInMinutes: moment
        .duration(timeInBedInHours, "hours")
        .asMinutes(),
      changes: changesArr,
    });

    userSentData
      .save()
      .then((data) => {
        return res.status(201).json({ message: "Done" });
      })
      .catch((error) => {
        console.log("error", error);
        return res.status(500).json({ message: error.message });
      });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ message: error.message });
  }
};

export const getUserSleepEfficiency = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await UserOnBoardingDataModel.findOne({ userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const sleepEfficiency =
      (user.totalSleepInMinutes /
        (timeInBedInHours(user.sleepTime, user.wakeUpTime) * 60)) *
      100;

    return res.status(200).json({ sleepEfficiency });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ message: error.message });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { nickname, password } = req.body;

    // Check if user already exists
    const existingUser = await UserOnBoardingDataModel.findOne({ nickname });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new UserOnBoardingDataModel({
      nickname,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
