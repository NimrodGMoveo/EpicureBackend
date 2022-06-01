const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

// require("dotenv").config();
// const url = process.env.URL;

const url = "mongodb+srv://nimrodtestdb:testpass123@cluster0.i8c3b.mongodb.net/EpicureDB";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  });
const DishesSchema = mongoose.Schema({
  name: String,
  price: Number,
  ingredients: String,
  tags: String,
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
});

const DishesModel = mongoose.model("Dishes", DishesSchema);

const ChefsSchema = mongoose.Schema({
  name: String,
  image: String,
  description: String,
  restaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }],
});

const ChefsModel = mongoose.model("Chefs", ChefsSchema);

const RestaurantSchema = mongoose.Schema({
  name: String,
  image: String,
  chef: { type: mongoose.Schema.Types.ObjectId, ref: "Chef" },
  dishes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dish" }],
});

const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);

app.get("/api/restaurants", async (req, res) => {
  try {
    const result = await RestaurantModel.find();
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
});

app.post("/api/restaurants", async (req, res) => {
  const result = await RestaurantModel.create(req.body);
  res.status(200).json({
    status: "success",
    result,
  });
});





//App listener
app.listen(8081);

