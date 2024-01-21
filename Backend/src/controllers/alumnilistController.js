// const { Alumni } = require("../models/alumniModel");
const { User } = require("../models/user");
async function alumniListController(req, res) {
  try {
    const alumni = await User.find({ role: "alumni", isApproved: false });
    res.status(200).json({
      status: "success",
      data: {
        alumni,
      },
    });
  } catch (error) {
    console.error("Error during alumni list:", error);
    throw error;
  }
}
module.exports = alumniListController;
