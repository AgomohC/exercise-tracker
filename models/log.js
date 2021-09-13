const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  userId: String,
  description: String,
  duration: Number,
  date: Date,
});

const NewLog = mongoose.model("NewLog", LogSchema);

module.exports = NewLog;
