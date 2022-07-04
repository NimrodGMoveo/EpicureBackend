const handler = require("../Handlers/theWeekHandler");
const chefHandler = require("../Handlers/chefsHandler");

const requestChefOfTheWeek = async (req, res) => {
  try {
    const result = await handler.getChefOfTheWeek();
    res.send(result);
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      message: error,
    });
  }
};
const requestChefOfTheWeekRestuarants = async (req, res) => {
  try {
    const result = await handler.getChefOfTheWeekRestaurants();
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

const requestPostChefOfTheWeek = async (req, res) => {
  try {
    const result = await handler.postChefOfTheWeek(req.body);
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
const requestUpdateChefOfTheWeek = async (req, res) => {
  try {
    //const newChefResult = await chefHandler.getSpecificChef(req.params.id);
    const deletedCurrent = await handler.deleteChefOfTheWeek();
    const result = await handler.postChefOfTheWeek(req.body);
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

module.exports = {
  requestChefOfTheWeek,
  requestUpdateChefOfTheWeek,
  requestPostChefOfTheWeek,
  requestChefOfTheWeekRestuarants,
};
