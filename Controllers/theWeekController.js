const handler = require("../Handlers/theWeekHandler");

const requestChefOfTheWeek = async (req, res) => {
  try {
    const result = await handler.getChefOfTheWeek();
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
const requestChefOfTheWeekRestuarants = async (req, res) => {
  try {
    const result = await handler.getChefOfTheWeekRestaurants(req.params.id);
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
    const result = await handler.updateChefOfTheWeek(req.body, req.params.id);
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
  requestChefOfTheWeekRestuarants
};
