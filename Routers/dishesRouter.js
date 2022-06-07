const dishesRouter = require("express").Router();
const dishesController = require("../Controllers/dishesController");

module.exports = { dishesRouter };

dishesRouter.get("/", (req, res) =>
  dishesController.requestDishesList(req, res)
);

dishesRouter.post("/", (req, res) => dishesController.requestAddDish(req, res));

dishesRouter.patch("/:id", (req, res) =>
  dishesController.requestUpdateDish(req, res)
);

dishesRouter.delete("/:id", (req, res) =>
  dishesController.requestDeleteDish(req, res)
);
