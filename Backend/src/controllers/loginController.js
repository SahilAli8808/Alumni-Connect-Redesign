// const Alumni = require("../models/alumniModel");
// const { Admin } = require("../models/adminModel");
const { User } = require("../models/user");
// const {College} = require('../models/collegeModel');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const loginController = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    console.log(req.body);
    if (role === "alumni") {
      const alumni = await User.findOne({
        email,
        role: "alumni",
      });
      if (!alumni) {
        res.status(404).json({
          status: "fail",
          message: "Alumni not found",
        });
      } else if (alumni.isApproved === false) {
        res.status(403).json({
          status: "fail",
          message:
            "Alumni not approved, Please contact the administrator for assistance.",
        });
      } else {
        if (alumni.password === password) {
          // generate token
          const token = jwt.sign({ id: alumni._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
          });
          res.cookie("jwt", token, {
            expires: new Date(
              Date.now() +
                process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          });
          res.status(200).json({
            alumni,
          });
        } else {
          res.status(401).json({
            status: "fail",
            message: "Incorrect password",
          });
        }
      }
    } else if (role === "admin") {
      const admin = await User.findOne({
        email,
        role: "admin",
        isApproved: true,
      });
      if (!admin) {
        res.status(404).json({
          status: "fail",
          message: "Admin not found",
        });
      } else if (admin.isApproved === false) {
        res.status(403).json({
          status: "fail",
          message:
            "Alumni not approved, Please contact the administrator for assistance.",
        });
      } else {
        if (admin.password === password) {
          // generate token
          const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
          });
          res.cookie("jwt", token, {
            expires: new Date(
              Date.now() +
                process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          });
          res.status(200).json({
            admin,
          });
        } else {
          res.status(401).json({
            status: "fail",
            message: "Incorrect password",
          });
        }
      }
    } else if (role === "college") {
      const college = await College.findOne({ email });
      if (!college) {
        res.status(404).json({
          status: "fail",
          message: "College not found",
        });
      } else {
        if (college.password === password) {
          // generate token
          const token = jwt.sign({ id: college._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
          });
          res.cookie("jwt", token, {
            expires: new Date(
              Date.now() +
                process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          });
          res.status(200).json({
            college,
          });
        } else {
          res.status(401).json({
            status: "fail",
            message: "Incorrect password",
          });
        }
      }
    } else if (role === "faculty") {
      const faculty = await Faculty.findOne({ email });
      if (!faculty) {
        res.status(404).json({
          status: "fail",
          message: "Faculty not found",
        });
      } else {
        if (faculty.password === password) {
          res.status(200).json({
            status: "success",
            data: {
              faculty,
            },
          });
        } else {
          res.status(401).json({
            status: "fail",
            message: "Incorrect password",
          });
        }
      }
    } else {
      res.status(401).json({
        status: "fail",
        message: "Invalid role",
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

module.exports = loginController;
