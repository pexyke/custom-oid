const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true }, // empty string NONO!
  content: { type: String, required: true }, // empty string is enough
  isDone: { type: Boolean, default: false },
});

const dashboardSchema = new mongoose.Schema({
  title: { type: String, required: true }, // empty string NONO!
  todos: [todoSchema], // empty list is default?
});

const userSchema = new mongoose.Schema({
  username: { type: String }, // empty string NONO!
  providers: {
    google: { type: String },
    github: { type: String },
  },
  dashboards: [dashboardSchema], // empty list is default?
});

const User = mongoose.model("user", userSchema);
module.exports = User;

/*
todos: { type: todoSchema, default: () => [] }, // empty list is default?
*/
