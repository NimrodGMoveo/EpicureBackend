const chefsRouter = require("express").Router();
const chefsController = require("../Controllers/chefsController");
const verifyUser = require("../Validations/verifyToken").verifyUser;

module.exports = { chefsRouter };

chefsRouter.get("/", chefsController.requestChefsList);

chefsRouter.post("/", verifyUser, chefsController.requestAddChef);

chefsRouter.patch("/:id", verifyUser, chefsController.requestUpdateChef);

chefsRouter.patch("/delete/:id", verifyUser, chefsController.requestDeleteChef);
