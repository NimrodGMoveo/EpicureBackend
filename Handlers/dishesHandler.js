const model = require("../Schemes/dishesScheme").DishesModel;

const getDishesList = () => {
  return model.find().populate("restaurant");
};

const postDish = (data) => {
  return model.create(data);
};

const updateDish = (newData, dishID) => {
  return model.findByIdAndUpdate(dishID, newData);
};

const deleteDish = (dishID) => {
  return model.deleteOne({ _id: dishID });
};

module.exports = { getDishesList, postDish, updateDish, deleteDish };
