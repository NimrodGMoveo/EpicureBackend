const handler = require("../Handlers/chefsHandler");
const restaurantsController = require("../Controllers/restaurantsController");
const restaurantsHandler = require("../Handlers/restaurantsHandler");
const dishesHandler = require("../Handlers/dishesHandler");

const requestChefsList = async (req, res) => {
  try {
    const result = await handler.getChefsList();
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
const requestSpecificChef = async (req, res) => {
  try {
    const result = await handler.getSpecificChef(req.params.id);
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

const requestAddChef = async (req, res) => {
  try {
    chef = {
      ...req.body,
    };
    const result = await handler.postChef(chef);
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

const requestUpdateChef = async (req, res) => {
  try {
    const chef = await handler.updateChef(req.params.id, req.body);
    res.status(200).json({
      status: "Success",
      data: chef,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      message: error,
    });
  }
};

////////////////////////////////////////////////////////////////////////
const requestDeleteChef = async (req, res) => {
  try {
    const chefRestuarnantList = await restaurantsHandler.deleteManyMany(
      req.params.id
    );
    const deletedRestaurants = await chefRestuarnantList.map((id) => {
      dishesHandler.deleteManyById(id);
    });
    const deletedRestaurants2 = await restaurantsHandler.deleteManyById(
      req.params.id
    );
    const deletedChef = await handler.deleteChef(req.params.id);
    res.status(200).json({
      status: "Success",
      data: deletedChef,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      message: error,
    });
  }
};

module.exports = {
  requestChefsList,
  requestAddChef,
  requestUpdateChef,
  requestDeleteChef,
  requestSpecificChef
};
