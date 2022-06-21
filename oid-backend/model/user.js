const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, minlength: 2 },
  password: { type: String, minlength: 2 },
});

const User = mongoose.model("user", userSchema);
module.exports = User;