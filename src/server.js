const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.resolve(__dirname, "./.env"),
});
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("../Routers/mainRouter").mainRouter;

const port = process.env.PORT;
const app = express();
const url = process.env.MONGODB_URI;

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connected")
);

let corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", cors(corsOptions), mainRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
//Create USE effect withing every backend request
