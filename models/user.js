const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  count: Number,
  log: [
    {
      description: {
        type: String,
        // required: true,
      },
      duration: {
        type: Number,
        // required: true,
      },
      date: Date,
    },
  ],
});

const NewUser = mongoose.model("NewUser", UserSchema);

module.exports = NewUser;
