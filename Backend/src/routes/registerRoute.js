const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.post('/register',registerController);

module.exports = router;