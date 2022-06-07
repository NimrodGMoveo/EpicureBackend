const mongoose = require("mongoose");

const ChefsSchema = new mongoose.Schema({
  name: { type: String, min: [1, "Chef Name can't be empty"], required: true, },
  image: {
    type: String,
    min: [0, "String can be less than zero chars"],
    required: true,
  },
  description: { type: String, min: [1, "Chef Description can't be empty"],required: true, },
});

const ChefsModel = mongoose.model("Chefs", ChefsSchema);

module.exports = { ChefsModel };
