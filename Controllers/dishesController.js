const handler = require("../Handlers/dishesHandler");

const requestDishesList = async (req, res) => {
  try {
    const result = await handler.getDishesList();
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

const requestAddDish = async (req, res) => {
  try {
    dish = {
      ...req.body,
    };
    const result = await handler.postDish(dish);
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
const requestUpdateDish = async (req, res) => {
  try {
    const dish = await handler.updateDish(req.body, req.params.id);
    res.status(200).json({
      status: "Success",
      data: dish,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      message: error,
    });
  }
};

const requestDeleteDish = async (req, res) => {
  try {
    const dish = await handler.deleteDish(req.params.id);
    res.status(200).json({
      status: "Success",
      data: dish,
      deleted: `dish ${req.params.id}`,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      message: error,
    });
  }
};

module.exports = {
  requestDishesList,
  requestAddDish,
  requestUpdateDish,
  requestDeleteDish,
};
