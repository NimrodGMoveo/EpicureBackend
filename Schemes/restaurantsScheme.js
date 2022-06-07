const model = require("../Schemes/chefsScheme").ChefsModel;
const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, min: [1, "Restaurant  Name can't be empty"], required: true,},
  image: {type: String, min: [1, "Image can't be empty"], required: true},
  stars: {type: Number,min: [1, "Stars can't be negative"], required: false},
  chef: { type: mongoose.Schema.Types.ObjectId, ref: "Chefs", required: true},
});

const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);

module.exports = { RestaurantModel };
