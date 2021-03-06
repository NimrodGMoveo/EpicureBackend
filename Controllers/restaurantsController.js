const handler = require("../Handlers/restaurantsHandler");
const dishHandler = require("../Handlers/dishesHandler");

const requestRestaurantsList = async (req, res) => {
  try {
    const result = await handler.getRestaurantList();
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      message: error,
    });
  }
};
const requestRestaurantsDishes2 = async (req, res) => {
  try {
    const result = await handler.getRestuarantDishes2(req.params.id);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      message: error,
    });
  }
};

const requestAddRestaurant = async (req, res) => {
  try {
    const result = await handler.postRestaurant(req.body);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      message: error,
    });
  }
};


// I need aggregation of lookup 
const requestRestaurantDishes = async (req, res) => {
  try{
    const result = await handler.getRestuarantDishes(req.body);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      message: error,
    });
  }
}

const requestUpdateRestaurant = async (req, res) => {
  try {
    const restaurant = await handler.updateRestaurant(req.body, req.params.id);
    res.status(200).json({
      status: "Success",
      data: restaurant,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      message: error,
    });
  }
};

const requestDeleteRestaurant = async (req, res) => {
  try {
    const dishesRestaurant = await dishHandler.deleteManyById(req.params.id);
    const restaurant = await handler.deleteRestaurant(req.params.id);
    res.status(200).json({
      status: "Success",
      data: restaurant,
      deleted: `restaurant ${req.params.id}`,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      message: error,
    });
  }
};


module.exports = {
  requestRestaurantsList,
  requestAddRestaurant,
  requestUpdateRestaurant,
  requestDeleteRestaurant,
  requestRestaurantDishes,
  requestRestaurantsDishes2
};
