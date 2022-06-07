const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const mainRouter = require("../Routers/mainRouter").mainRouter;

const port = process.env.PORT;
const app = express();
const url = process.env.URL;

mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Connect")
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", mainRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
