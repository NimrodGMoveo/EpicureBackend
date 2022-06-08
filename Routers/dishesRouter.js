const dishesRouter = require("express").Router();
const dishesController = require("../Controllers/dishesController");

module.exports = { dishesRouter };

dishesRouter.get("/", dishesController.requestDishesList);

dishesRouter.post("/", dishesController.requestAddDish);

dishesRouter.patch("/:id", dishesController.requestUpdateDish);

dishesRouter.delete("/:id", dishesController.requestDeleteDish);
