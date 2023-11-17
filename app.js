import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { apiCurrentVersion } from "./data/constants.js";
import userOnBoardingRoutes from "./routes/userOnboarding.js";

const uri =
  "mongodb+srv://tusharkc2502:TmEpGVP0ugV8Fngm@wysadb.e4dmafh.mongodb.net/?retryWrites=true&w=majority";

const port = 3000;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(`/api/${apiCurrentVersion}/userOnBoarding`, userOnBoardingRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
