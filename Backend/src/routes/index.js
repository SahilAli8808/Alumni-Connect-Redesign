const express =  require('express');  
// const mongoose = require('mongoose');
const router = express.Router();

const registerRoute = require('./registerRoute');
const loginRoute = require('./loginRoute');
const alumniListRoute = require('./alumniListRoute');


router.get('/', (req, res) => {
    console.log("Server is up and running.");
    res.send("Server is up and running.");
})


router.use('/alumni', registerRoute);
console.log("registerRoute");
router.use('/auth', loginRoute);
router.use('/', alumniListRoute);
// router.use('/', Route);


module.exports = router;