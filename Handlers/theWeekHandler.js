const chefOfTheWeekModel = require("../Schemes/chefOfTheWeekScheme").ChefOfTheWeekModel;
const RestaurantModel  = require("../Schemes/restaurantsScheme").RestaurantModel;

const getChefOfTheWeek = () => {
    return chefOfTheWeekModel.find().populate("chef");
  }
  const postChefOfTheWeek = (data) => {
    return chefOfTheWeekModel.create(data);
  }
  const updateChefOfTheWeek = (newData, chefID) => {
    return chefOfTheWeekModel.findByIdAndUpdate(chefID, newData);
  }

  const getChefOfTheWeekRestaurants = () => {
    return chefOfTheWeekModel.aggregate([
      {
        '$lookup': {
          'from': 'chefs', 
          'localField': 'chef', 
          'foreignField': '_id', 
          'as': 'chef'
        }
      }, {
        '$unwind': {
          'path': '$chef'
        }
      }, {
        '$lookup': {
          'from': 'restaurants', 
          'localField': 'chef._id', 
          'foreignField': 'chef', 
          'as': 'restaurants'
        }
      }, {
        '$unwind': {
          'path': '$restaurants'
        }
      }
    ])
  }

  module.exports = {getChefOfTheWeek, postChefOfTheWeek, updateChefOfTheWeek, getChefOfTheWeekRestaurants}