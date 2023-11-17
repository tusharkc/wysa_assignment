import moment from "moment";

export const timeInBedInHours = (sleepTime, wakeUpTime) => {
  const wakeUp = moment(wakeUpTime, "h:mm A");
  const sleep = moment(sleepTime, "h:mm A");
  let hours = wakeUp.diff(sleep, "hours");
  if (hours < 0) {
    hours = 24 + hours;
  }
  return hours;
};
