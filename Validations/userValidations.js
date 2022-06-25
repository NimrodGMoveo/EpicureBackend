const Joi = require("@hapi/joi");

const userValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(8).required(),
    hashedPassword: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

module.exports = { userValidation };
