const express = require("express");
const mainRouter = express.Router();

const restaurantsRouter = require("./restaurantsRouter").restaurantsRouter;
const dishesRouter = require("./dishesRouter").dishesRouter;
const chefsRouter = require("./chefsRouter").chefsRouter;
const searchRouter = require("./searchRouter").searchRouter;
const theWeekRouter = require("./theWeekRouter").ChefOfTheWeekRouter;
const userRouter = require("./userRouter").userRouter

module.exports = { mainRouter };

mainRouter.use("/restaurants",  restaurantsRouter);
mainRouter.use("/dishes", dishesRouter);
mainRouter.use("/chefs", chefsRouter);
mainRouter.use("/search", searchRouter);
mainRouter.use("/chefweek", theWeekRouter);
mainRouter.use("/admin", userRouter);