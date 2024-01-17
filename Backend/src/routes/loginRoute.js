const express = require('express');
const router = express.Router();
const  loginController  = require('../controllers/loginController');

console.log("loginRoute");
router.use('/login', loginController);


module.exports = router;