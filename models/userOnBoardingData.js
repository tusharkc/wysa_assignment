import mongoose from "mongoose";
const { Schema } = mongoose;

const UserOnBoardingDataSchema = new Schema({
  createdAt: {
    type: Date,
    default: new Date(),
  },
  weekSelection: String,
  sleepTime: String,
  wakeUpTime: String,
  totalSleepInMinutes: Number,
  changes: [{ change: String }],
});

export const UserOnBoardingDataModel = mongoose.model(
  "userOnBoardingDataModel",
  UserOnBoardingDataSchema
);
