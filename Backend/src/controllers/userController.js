const { User } = require("../models/userModel");

// Function to fetch all users
async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (error) {
    console.error("Error during fetching all users:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
}

// Function to fetch alumni users whose isApproved is false
async function getUnapprovedAlumni(req, res) {
  try {
    const alumni = await User.find({ role: "alumni", isApproved: false });

    res.status(200).json({
      status: "success",
      data: {
        alumni,
      },
    });
  } catch (error) {
    console.error("Error during fetching unapproved alumni:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  getAllUsers,
  getUnapprovedAlumni,
};
