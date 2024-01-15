const express =  require('express');  
// const mongoose = require('mongoose');
const router = express.Router();

const registerRoute = require('./registerRoute');


router.get('/', (req, res) => {
    console.log("Server is up and running.");
    res.send("Server is up and running.");
})


router.use('/alumni', registerRoute);
// router.use('/', Route);


module.exports = router;