const restaurantsRouter = require("express").Router();
const restaurantsController = require("../Controllers/restaurantsController");

module.exports = { restaurantsRouter };

restaurantsRouter.get("/", restaurantsController.requestRestaurantsList);

restaurantsRouter.get("/dishes2", restaurantsController.requestRestaurantDishes);

restaurantsRouter.post("/", restaurantsController.requestAddRestaurant);

restaurantsRouter.patch("/:id", restaurantsController.requestUpdateRestaurant);

restaurantsRouter.delete("/:id", restaurantsController.requestDeleteRestaurant);
