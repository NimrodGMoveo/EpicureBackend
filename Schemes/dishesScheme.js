const mongoose = require("mongoose");

const DishesSchema = new mongoose.Schema({
  name: { type: String, min: [1, "Dish  Name can't be empty"], required: true,},
  price: { type: String, min: [0, "Dish Price can't be less than 0"], required: true,},
  ingredients: {type: String, min: [0, "Dish description can't be empty"], required: true},
  tags: {type: [String], required:false},
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurants", required: true },
});

const DishesModel = mongoose.model("Dishes", DishesSchema);

module.exports = { DishesModel}