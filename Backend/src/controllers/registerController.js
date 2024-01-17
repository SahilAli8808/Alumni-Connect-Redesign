// register controller

// Path: Backend/src/controllers/registerController.js
const { Alumni } = require('../models/alumniModel');

const registerController = async (req, res) => {  
    try{  
        console.log(req.body);
        const { email, password, startYear,endYear,degree,branch,rollNumber,firstName,lastName,} = req.body;
  
    try {
        const alumni = await Alumni.create({
        firstName,
        lastName,
        rollNumber,
        branch,
        degree,
        startYear,
        endYear,
        email,
        password,
        });
        res.status(201).json({
        status: 'success',
        data: {
            alumni,
        },
        });
    } catch (error) {
        res.status(400).json({
        status: 'fail',
        message: error,
        });
    }
} catch (error) {
    console.error('Error during alumni registration:', error);
    throw error;
}
    }

module.exports = registerController;