const dishesRouter = require("express").Router();
const dishesController = require("../Controllers/dishesController");
const verifyUser = require("../Validations/verifyToken").verifyUser;

module.exports = { dishesRouter };

dishesRouter.get("/", dishesController.requestDishesList);

dishesRouter.post("/", verifyUser, dishesController.requestAddDish);

dishesRouter.patch("/:id", verifyUser, dishesController.requestUpdateDish);

dishesRouter.patch("delete/:id", verifyUser,  dishesController.requestDeleteDish);
