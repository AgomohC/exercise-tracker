const NewUser = require("../models/user");
const NewLog = require("../models/log");
const moment = require("moment");

const createNewUser = async (req, res) => {
  const { username } = req.body;
  //check if username exists
  try {
    const user = await NewUser.findOne({ username });
    if (!user) {
      try {
        const newUser = await NewUser.create({ username });
        return res
          .status(201)
          .json({ username: newUser.username, _id: newUser._id });
      } catch (error) {
        return res
          .status(500)
          .json({ msg: "something went wrong, please try again" });
      }
    } else {
      return res.status(200).json({ username: user.username, _id: user._id });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "something went wrong, please try again" });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await NewUser.find({}).select({
      username: 1,
      _id: 1,
    });
    return res.status(200).json({ users });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Something went wrong, please try again" });
  }
};
const addExercise = async (req, res) => {
  let { id, description, duration, date } = req.body;
  if (!id) {
    return res.status(400).json({ msg: "Please enter id" });
  }
  if (!description) {
    return res.status(400).json({ msg: "Please enter description" });
  }
  if (!duration) {
    return res.status(400).json({ msg: "Please enter duration" });
  }
  if (!date) {
    let today = new Date();
    let thisYear = today.getUTCFullYear();
    let thisMonth = today.getUTCMonth() + 1;
    if (thisMonth < 10) {
      thisMonth = `0${thisMonth}`;
    }
    let thisDay = today.getUTCDate();
    date = `${thisYear}-${thisMonth}-${thisDay}`;
    date = moment(date).format("ddd MMMM DD YYYY");
  } else {
    date = moment(date).format("ddd MMMM DD YYYY");
  }
  try {
    let finalUser = {
      username: "",
      _id: "",
      count: 0,
      log: [],
    };
    const user1 = await NewUser.findOne({ _id: id });
    if (!user1) {
      return res.status(404).json({ msg: "user does not exist" });
    } else {
      const userLog = await NewLog.create({
        description,
        duration,
        date,
        userId: id,
      });
      const userLog1 = await NewLog.find({ userId: id }).select({
        description: 1,
        duration: 1,
        date: 1,
        _id: 0,
      });
      finalUser.username = user1.username;
      finalUser._id = id;
      finalUser.count = userLog1.length;
      finalUser.log = userLog1;
      return res.status(200).json({ userLogs: finalUser });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Something went wrong, please try again" });
  }
};
const getExerciseLogs = async (req, res) => {
  let { _id } = req.params;
  let { from, to, limit } = req.query;
  from = moment(from, "YYYY-MM-DD").isValid() ? moment(from, "YYYY-MM-DD") : 0;
  to = moment(to, "YYYY-MM-DD").isValid()
    ? moment(to, "YYYY-MM-DD")
    : moment().add(1000000000000);
  try {
    const user = await NewUser.findOne({ _id });
    const log1 = await NewLog.find({ userId: _id })
      .where("date")
      .gte(from)
      .lte(to)
      .limit(-limit);

    if (!user) {
      return res.status(404).json({ msg: "user does not exist" });
    }
    const result = {
      _id,
      username: user.username,
      count: log1.length,
      log: log1.map((item) => ({
        description: item.description,
        duration: item.duration,
        date: item.date,
      })),
    };
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Something went wrong, please try again" });
  }
};

module.exports = { createNewUser, getAllUsers, addExercise, getExerciseLogs };
