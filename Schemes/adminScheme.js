const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  username: { type: "string", required: true, min: 8, max: 255 },
  hashedPassword: { type: "string", required: true, max: 1024, min: 6 },
  date:{type: Date, default: Date.now},
  admin: { type: "boolean", default: false}
});

const AdminModel = mongoose.model("Admins", AdminSchema);

module.exports = { AdminModel };
