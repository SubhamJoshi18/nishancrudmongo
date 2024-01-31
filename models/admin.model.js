const mongoose = require("mongoose");

const Task = mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name must be required"],
    trim: true,
    maxLength: [20, "name is longer than max length which is 20"],
  },
  status: {
    type: Boolean,
    trim: true,
    default: false,
  },
});

module.exports = mongoose.model("tasks", Task);
