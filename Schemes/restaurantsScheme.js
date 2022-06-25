const { boolean } = require("joi");
const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    min: [1, "Restaurant  Name can't be empty"],
    required: true,
  },
  image: { type: String, min: [1, "Image can't be empty"], required: true },
  stars: {
    type: Number,
    min: [1, "Minimum number of stars is 1"],
    max: [5, "Maximum number of stars is 5"],
  },
  chef: { type: mongoose.Schema.Types.ObjectId, ref: "Chefs", required: true },
  openingHours: {type: [String], required: true},
  openDate: { type: Date, required: true },
  popular: { type: Boolean, required: true},
  signatureDish: { type: mongoose.Schema.Types.ObjectId, ref: "Dishes" },
  active: {type: Boolean, required: true},
});

const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);

module.exports = { RestaurantModel };
