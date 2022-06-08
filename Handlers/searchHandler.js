const restaurants = require("../Schemes/restaurantsScheme").RestaurantModel;
const dishes = require("../Schemes/dishesScheme").DishesModel;
const chefs = require("../Schemes/chefsScheme").ChefsModel;

//build a shared model

//find all instances of a given string sorted by model type

const getSearchResult = (input) => {
  let models = [];
  models.push(restaurants);
  models.push(dishes);
  models.push(chefs);
  return Promise.all(models.map((model) => model.find({ $model: input })));
};

module.exports = { getSearchResult };
