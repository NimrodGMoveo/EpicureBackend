const restaurantsRouter = require("express").Router();
const restaurantsController = require("../Controllers/restaurantsController");
const verifyUser = require("../Validations/verifyToken").verifyUser;

module.exports = { restaurantsRouter };

restaurantsRouter.get("/", restaurantsController.requestRestaurantsList);

restaurantsRouter.get("/dishes", restaurantsController.requestRestaurantDishes);

restaurantsRouter.post(
  "/",
  verifyUser,
  restaurantsController.requestAddRestaurant
);

restaurantsRouter.patch(
  "/:id",
  verifyUser,
  restaurantsController.requestUpdateRestaurant
);

restaurantsRouter.patch(
  "/delete/:id",
  verifyUser,
  restaurantsController.requestDeleteRestaurant
);
