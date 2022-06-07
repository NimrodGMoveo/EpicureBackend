const restaurantsRouter = require("express").Router();
const restaurantsController = require("../Controllers/restaurantsController");

module.exports = { restaurantsRouter };

restaurantsRouter.get("/", (req, res) =>
  restaurantsController.requestRestaurantsList(req, res)
);

restaurantsRouter.post("/", (req, res) =>
  restaurantsController.requestAddRestaurant(req, res)
);

restaurantsRouter.patch("/:id", (req, res) =>
  restaurantsController.requestUpdateRestaurant(req, res)
);

restaurantsRouter.delete("/:id", (req, res) =>
  restaurantsController.requestDeleteRestaurant(req, res)
);
