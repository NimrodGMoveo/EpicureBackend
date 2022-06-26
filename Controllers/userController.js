const handler = require("../Handlers/userHandler");
const { userValidation } = require("../Validations/userValidations");
const Joi = require("@hapi/joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../Schemes/adminScheme").AdminModel;
const dotenv = require("dotenv").config();

const requestPostUser = async (req, res) => {
  //Check if input is valid
  const { err } = userValidation(req.body);
  if (err) return res.status(400).send(err.details[0].message);

  //check if username is already exists
  const usernameExists = await userModel.findOne({
    username: req.body.username,
  });
  if (usernameExists)
    return res.status(400).send("Username or Password does not exists");

  //HashPassword
  const salt = await bcrypt.genSalt(10);
  const hashedPassword2 = await bcrypt.hash(req.body.hashedPassword, salt);

  const user = new userModel({
    username: req.body.username,
    hashedPassword: hashedPassword2,
  });
  console.log(user);
  try {
    const savedUser = await user.save();
    res.status(200).send(savedUser);
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      message: error,
    });
  }
};

//This is a function when a user request to login
const requestLogInUser = async (req, res) => {
  const { err } = userValidation(req.body);
  if (err) return res.status(400).send(err.details[0].message);
  const givenUsername = req.body.username;
  const user = await userModel.findOne({
    username: givenUsername,
    admin: true,
  });

  if (!user)
    return res.status(400).send("Username or Password does not exists");

  const validPass = await bcrypt.compare(
    req.body.hashedPassword,
    user.hashedPassword
  );
  if (!validPass) return res.status(400).send("Invalid Password");

  //create and asign token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });
  res.header("auth-token", token).send(token);
};

module.exports = { requestPostUser, requestLogInUser };
