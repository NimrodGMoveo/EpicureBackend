const searchRouter = require("express").Router();
const searchController = require("../Controllers/searchController");

module.exports = { searchRouter };

searchRouter.get("/:input", searchController.requestSearchResult);
