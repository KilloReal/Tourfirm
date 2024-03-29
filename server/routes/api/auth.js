const express = require("express");
const router = express.Router();

// Load User model
const User = require("../../models/User");

/**
 * @route GET api/auth/login
 * @description login the user
 * @access Public
 */
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    const isMatch = await user.comparePassword(req.body.password);
    console.log(isMatch);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });
    else {
      let lUser = user;
      lUser.password = "";
      console.log(lUser);
      res.status(200).json(lUser);
    }
  } catch (err) {
    res.status(401).json({ message: "No such user" });
  }
});

/**
 * @route GET api/auth/register
 * @description registrate new user
 * @access Public
 */
router.post("/register", async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
      admin: false,
    });
    console.log(user);
    user.save();
    let lUser = user;
    lUser.password = "";
    res.status(200).json(lUser);
  } catch (err) {
    res.status(409).json({ message: "User already exists" });
  }
});

module.exports = router;
