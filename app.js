import express from "express";
import userOnBoardingRoutes from "./routes/userOnboarding.js";
const app = express();
const port = 3000;

import { MongoClient } from "mongodb";
import { apiCurrentVersion } from "./data/constants.js";
const uri =
  "mongodb+srv://tusharKc2502:hhg1tTjecrC2VSL0@cluster0.wwxqo43.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("wysa_db");
    client.close();
  })
  .catch((error) => console.error(error));

app.use(`/api/${apiCurrentVersion}/userOnBoarding`, userOnBoardingRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
