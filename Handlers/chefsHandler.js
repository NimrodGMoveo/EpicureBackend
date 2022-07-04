const dishHandler = require("../Handlers/dishesHandler");
const restaurantHandler = require("../Handlers/restaurantsHandler");
const model = require("../Schemes/chefsScheme").ChefsModel;
const restaurantModel = require("../Schemes/restaurantsScheme").RestaurantModel;

const getChefsList = () => {
  return model.aggregate([
    {
      $match: {
        active: true,
      },
    },
  ]);
};

const getSpecificChef = (chefID) => {
  return model.findById(chefID);
};

const postChef = (data) => {
  return model.create(data);
};

const updateChef = (chefID, newData) => {
  return model.findByIdAndUpdate(chefID, newData);
};

const deleteChef = (chefID) => {
  return model.updateOne({ _id: chefID }, { $set: { active: false } });
};

const checkTempChef = (chefID) => {
  let a = restaurantModel.find({ chef: ObjectId(chefID) });
  return a;
};

module.exports = {
  getChefsList,
  postChef,
  deleteChef,
  updateChef,
  checkTempChef,
  getSpecificChef,
};
