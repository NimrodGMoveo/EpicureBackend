const mongoose = require("mongoose");

const ChefOfTheWeekScheme = new mongoose.Schema({
  chef: { type: mongoose.Schema.Types.ObjectId, ref: "Chefs"},
});

const ChefOfTheWeekModel = mongoose.model(
  "Chef Of The Week",
  ChefOfTheWeekScheme
);
module.exports = { ChefOfTheWeekModel };
