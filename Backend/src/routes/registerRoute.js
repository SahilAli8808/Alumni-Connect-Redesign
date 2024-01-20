const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");

router.post("/user", registerController);

module.exports = router;
