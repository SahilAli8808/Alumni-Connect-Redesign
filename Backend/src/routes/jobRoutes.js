// routes/jobRoutes.js
const express = require("express");
const router = express.Router();
const {
  createJobController,
  getAllJobsController,
} = require("../controllers/jobController");

const checkAuth = require("../middlewares/checkAuth");

// Assuming you have middleware for authentication
router.post("/create", checkAuth, createJobController);
router.get("/all", checkAuth, getAllJobsController);

module.exports = router;
