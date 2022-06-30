const { stringify } = require("querystring");
const dishesHandler = require("../Handlers/dishesHandler");

const restaurantModel = require("../Schemes/restaurantsScheme").RestaurantModel;
const dishesModel = require("../Schemes/dishesScheme").DishesModel;

const getRestaurantList = () => {
  return restaurantModel.aggregate([
    {
      $match: {
        active: true,
      },
    },
    {
      $lookup: {
        from: "chefs",
        localField: "chef",
        foreignField: "_id",
        as: "chef",
      },
    },
    { $unwind: "$chef" },
    {
      $lookup: {
        from: "dishes",
        localField: "signatureDish",
        foreignField: "_id",
        as: "signatureDish",
      },
    },
    { $unwind: "$signatureDish" },
  ]);
};

const getRestuarantDishes = (data) => {
  return restaurantModel.aggregate([
    {
      $lookup: {
        from: "dishes",
        localField: "signatureDish",
        foreignField: "_id",
        as: "signatureDish",
      },
    },
    { $unwind: "$signatureDish" },
    {
      $limit: 3,
    },
  ]);
};

const getRestuarantDishes2 = (restaurantID) => {
  return dishesModel.find({restaurant: restaurantID})
}

const postRestaurant = (data) => {
  return restaurantModel.create(data);
};

const updateRestaurant = (newData, restaurantID) => {
  return restaurantModel.findByIdAndUpdate(restaurantID, newData);
};

const deleteRestaurant = (restaurantID) => {
  return restaurantModel.updateOne(
    { _id: restaurantID },
    { $set: { active: false } }
  );
};

const deleteManyById = async (chefRef) => {
  const deletedRestaurants = await restaurantModel.updateMany(
    { chef: chefRef },
    { $set: { active: false } }
  );
  return deletedRestaurants;
};

//////////////////////////////////////////
const deleteManyMany = async (chefRef) => {
  let arr = await (
    await restaurantModel.find({ chef: chefRef })
  ).map((rest) => {
    return rest._id;
  });
  return arr;
};

module.exports = {
  postRestaurant,
  getRestaurantList,
  updateRestaurant,
  deleteRestaurant,
  getRestuarantDishes,
  deleteManyById,
  deleteManyMany,
  getRestuarantDishes2
};
