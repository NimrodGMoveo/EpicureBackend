const chefsRouter = require("express").Router();
const chefsController = require("../Controllers/chefsController");

module.exports = { chefsRouter };

chefsRouter.get("/", (req, res) => chefsController.requestChefsList(req, res));

chefsRouter.post("/", (req, res) => chefsController.requestAddChef(req, res));

chefsRouter.patch("/:id", (req, res) =>
  chefsController.requestUpdateChef(req, res)
);

chefsRouter.delete("/:id", (req, res) =>
  chefsController.requestDeleteChef(req, res)
);
