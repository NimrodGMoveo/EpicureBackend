const chefOfTheWeekModel =
  require("../Schemes/chefOfTheWeekScheme").ChefOfTheWeekModel;
const chefModel = require("../Schemes/chefsScheme").ChefsModel;

const getChefOfTheWeek = () => {
  return chefOfTheWeekModel.find().populate("chef");
};
const postChefOfTheWeek = (data) => {
  return chefOfTheWeekModel.create(data);
};
const updateChefOfTheWeek = (newData) => {
  const deletedPreviousChef = chefOfTheWeekModel.deleteOne();
  return chefOfTheWeekModel.create(newData);
};

const deleteChefOfTheWeek = () => {
  return chefOfTheWeekModel.deleteOne();
}

const getChefOfTheWeekRestaurants = () => {
  return chefOfTheWeekModel.aggregate([
    {
      $lookup: {
        from: "chefs",
        localField: "chef",
        foreignField: "_id",
        as: "chef",
      },
    },
    {
      $unwind: {
        path: "$chef",
      },
    },
    {
      $lookup: {
        from: "restaurants",
        localField: "chef._id",
        foreignField: "chef",
        as: "restaurants",
      },
    },
    {
      $unwind: {
        path: "$restaurants",
      },
    },
  ]);
};

module.exports = {
  getChefOfTheWeek,
  postChefOfTheWeek,
  updateChefOfTheWeek,
  getChefOfTheWeekRestaurants,
  deleteChefOfTheWeek
};
