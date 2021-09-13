const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
});

const NewUser = mongoose.model("NewUser", UserSchema);

module.exports = NewUser;
