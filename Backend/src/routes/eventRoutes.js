const express = require("express");
const router = express.Router();
const {
  createEventController,
  getAllEventsController,
} = require("../controllers/eventController");
const checkAuth = require("../middlewares/checkAuth");

// Assuming you have middleware for authentication
router.use(checkAuth);

router.post("/create", createEventController);
router.get("/all", getAllEventsController);

module.exports = router;
