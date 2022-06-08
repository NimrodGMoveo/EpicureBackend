const chefsRouter = require("express").Router();
const chefsController = require("../Controllers/chefsController");

module.exports = { chefsRouter };

chefsRouter.get("/", chefsController.requestChefsList);

chefsRouter.post("/", chefsController.requestAddChef);

chefsRouter.patch("/:id", chefsController.requestUpdateChef);

chefsRouter.delete("/:id",chefsController.requestDeleteChef);
