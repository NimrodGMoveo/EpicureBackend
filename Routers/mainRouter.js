const express = require("express");
const mainRouter = express.Router();

const restaurantsRouter = require("./restaurantsRouter").restaurantsRouter;
const dishesRouter = require("./dishesRouter").dishesRouter;
const chefsRouter = require("./chefsRouter").chefsRouter;

module.exports = { mainRouter };

mainRouter.use("/restaurants", restaurantsRouter);
mainRouter.use("/dishes", dishesRouter);
mainRouter.use("/chefs", chefsRouter);
