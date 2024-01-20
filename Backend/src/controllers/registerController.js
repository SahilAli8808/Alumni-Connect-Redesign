// controllers/registerController.js
const Alumni = require("../models/alumniModel");
const { User } = require("../models/user"); // Replace with your User model

const registerController = async (req, res) => {
  try {
    const {
      email,
      password,
      startYear,
      endYear,
      degree,
      branch,
      rollNumber,
      firstName,
      lastName,
      role,
    } = req.body;
    console.log("registerController 1");
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "Email is already registered. Please use a different email.",
      });
    }

    // Create the user
    const newUser = await User.create({
      email,
      password,
      role,
    });

    // Create the alumni profile
    const alumni = await Alumni.create({
      user: newUser._id,
      email,
      password,
      startYear,
      endYear,
      degree,
      branch,
      rollNumber,
      firstName,
      lastName,
    });

    res.status(201).json({
      status: "success",
      data: {
        alumni,
      },
    });
  } catch (error) {
    console.log("registerController 2");
    console.error("Error during alumni registration:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

module.exports = registerController;
