// controllers/jobController.js
const { Job } = require("../models/job");

// Controller to create a job
const createJobController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const createdBy = req.user.id; // Assuming you have middleware to extract user info

    const job = await Job.create({
      title,
      description,
      createdBy,
    });

    res.status(201).json({
      status: "success",
      data: {
        job,
      },
    });
  } catch (error) {
    console.error("Error during job creation:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

// Controller to get all jobs
const getAllJobsController = async (req, res) => {
  try {
    const jobs = await Job.find().populate("createdBy", "email role"); // Populate createdBy field with user details
    res.status(200).json({
      status: "success",
      data: {
        jobs,
      },
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createJobController,
  getAllJobsController,
};
