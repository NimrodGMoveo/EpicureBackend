const ChefOfTheWeekRouter = require("express").Router();
const ChefOfTheWeekController = require("../Controllers/theWeekController");
const verifyUser = require("../Validations/verifyToken").verifyUser;


module.exports = { ChefOfTheWeekRouter };

ChefOfTheWeekRouter.get("/", ChefOfTheWeekController.requestChefOfTheWeek);

ChefOfTheWeekRouter.get("/rest",  ChefOfTheWeekController.requestChefOfTheWeekRestuarants);

ChefOfTheWeekRouter.post("/", ChefOfTheWeekController.requestPostChefOfTheWeek);

ChefOfTheWeekRouter.patch(
  "/", verifyUser,
  ChefOfTheWeekController.requestUpdateChefOfTheWeek
);

