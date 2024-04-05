const User = require("../models/user");
const { comparePassword, hashPassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("test is working");
};

const registerUser = async (req, res) => {
  // Mark the function as async
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    // Check if email was provided
    if (!email) {
      return res.json({
        error: "Email is required",
      });
    }

    // Check if password is valid
    if (!password || password.length < 4) {
      return res.json({
        error: "Password is required to be at least 4 characters long.",
      });
    }

    // Check if email already exists
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({
        error: "Email is already taken",
      });
    }

    const hashed = await hashPassword(password);
    // Create new user
    const user = await User.create({
      email,
      name,
      password: hashed,
    });

    // Return success response
    return res.json({
      success: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

// login endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //user exists then
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    // if pass match
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (match) {
      res.json("password match");
    }
    if (!match) {
      res.json({
        error: "password do not match",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (res, req) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
