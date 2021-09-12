const router = require("express").Router();
const {
  createNewUser,
  getAllUsers,
  addExercise,
  getExerciseLogs,
} = require("../controllers/track");

router.route("/").get(getAllUsers).post(createNewUser);
router.route("/:_id/exercises").post(addExercise);
router.route("/:_id/log").get(getExerciseLogs);

module.exports = router;
