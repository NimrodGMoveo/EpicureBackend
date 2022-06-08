const handler = require("../Handlers/searchHandler");

const requestSearchResult = async (req,res) => {
  try {
    const result = await handler.getSearchResult(req.params.input);
    res.status(200).json({
      status: "Success",
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      message: error,
    });
  }
};

module.exports = { requestSearchResult };
