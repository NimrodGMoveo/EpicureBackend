const model = require("../Schemes/dishesScheme").DishesModel;

const getDishesList = () => {
  return model.aggregate([
    {
      $match: {
        active: true,
      },
    },
    {
      $lookup: {
        from: "restaurants",
        localField: "restaurant",
        foreignField: "_id",
        as: "restaurant",
      },
    },
    { $unwind: "$restaurant" },
  ]);
};

const postDish = (data) => {
  return model.create(data);
};

const updateDish = (newData, dishID) => {
  return model.findByIdAndUpdate(dishID, newData);
};

const deleteDish = (dishID) => {
  return model.updateOne({ _id: dishID }, { $set: { active: false } });
};

const deleteManyById = async (restRef) => {
  const deletedDishes = await model.updateMany(
    { restaurant: restRef },
    { $set: { active: false } }
  );
  return deletedDishes;
};

module.exports = {
  getDishesList,
  postDish,
  updateDish,
  deleteDish,
  deleteManyById,
};
