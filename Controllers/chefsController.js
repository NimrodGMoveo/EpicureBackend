const handler = require("../Handlers/chefsHandler");

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

const requestAddChef = async (req, res) => {
  try {
    chef = {
      ...req.body
    }
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
    const chef = await handler.updateChef(
      req.body,
      req.params.id
    );
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

const requestDeleteChef = async (req, res) => {
  try {
    const chef = await handler.deleteChef(req.params.id);
    res.status(200).json({
      status: "Success",
      data: chef,
      deleted: `chef ${req.params.id}`,
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
};
