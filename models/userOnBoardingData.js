import mongoose from "mongoose";
const { Schema } = mongoose;

const UserOnBoardingDataSchema = new Schema({
  createdAt: {
    type: Date,
    default: new Date(),
  },
  userId: String,
  weekSelection: String,
  sleepTime: String,
  wakeUpTime: String,
  totalSleepInMinutes: Number,
  changes: [{ change: String }],
  nickname: String,
  password: String,
});

export const UserOnBoardingDataModel = mongoose.model(
  "UserOnBoardingDataModel",
  UserOnBoardingDataSchema
);
