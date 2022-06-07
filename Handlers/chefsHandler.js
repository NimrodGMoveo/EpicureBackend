const model = require("../Schemes/chefsScheme").ChefsModel;

const getChefsList = () => {
  return model.find();
};

const postChef = (data) => {
  return model.create(data);
};

const updateChef = (newData, chefID) => {
  return model.findByIdAndUpdate(chefID, newData);
};

const deleteChef = (chefID) => {
  return model.deleteOne({ _id: chefID });
};

module.exports = { getChefsList, postChef, deleteChef, updateChef };
