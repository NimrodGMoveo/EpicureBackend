const model = require("../Schemes/restaurantsScheme").RestaurantModel;

const getRestaurantList = () => {
  return model.find().populate("chef");
};

const getRestuarantDishes = (data) => {
  return model.aggregate([
    {$lookup: "chef"}
  ])
}

const postRestaurant = (data) => {
  return model.create(data);
};

const updateRestaurant = (newData, restaurantID) => {
  return model.findByIdAndUpdate(restaurantID, newData);
};

const deleteRestaurant = (restaurantID) => {
  return model.deleteOne({ _id: restaurantID });
};

module.exports = {
  postRestaurant,
  getRestaurantList,
  updateRestaurant,
  deleteRestaurant,
  getRestuarantDishes,
};
