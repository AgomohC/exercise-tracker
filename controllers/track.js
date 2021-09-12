const NewUser = require("../models/user");

const createNewUser = async (req, res) => {
  const { username } = req.body;
  const user = await NewUser.create({ username });
  res.status(201).json({ user });
};
const getAllUsers = async () => {
  const users = await NewUser.find({}).select({
    username: 1,
    _id: 1,
    count: 0,
    log: 0,
    __v: 0,
  });
  res.status(200).json({ users });
};
const addExercise = async () => {};
const getExerciseLogs = async () => {};

module.exports = { createNewUser, getAllUsers, addExercise, getExerciseLogs };
