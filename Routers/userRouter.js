const userRouter = require("express").Router();
const userController = require("../Controllers/userController");
const User = require("../Schemes/adminScheme").AdminModel;
const verifyUser = require("../Validations/verifyToken");

module.exports = { userRouter };

userRouter.post("/register", userController.requestPostUser);
userRouter.post("/login", userController.requestLogInUser);
