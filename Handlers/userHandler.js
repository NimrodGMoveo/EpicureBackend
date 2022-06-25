const model = require("../Schemes/adminScheme").AdminModel;
const bcrypt = require("bcryptjs");

const postUser = async (data) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword2 = await bcrypt.hash(data.hashedPassword, salt);
  console.log("Inside creating a user")
  const userExists = await model.findOne({ username: data.username });
  if (userExists) {
    return "User already exists";
  }

  const user = new model({
    username: data.username,
    hashedPassword: hashedPassword2,
  });
  return  await user.save();
};

module.exports = { postUser };
