const {Alumni} = require('../models/alumniModel');
 async function alumniListController(req, res) {
    try{
        const alumni = await Alumni.find();
        res.status(200).json({
            status: 'success',
            data: {
                alumni,
            },
        });
    } catch (error) {
        console.error('Error during alumni list:', error);
        throw error;
    }
}   
module.exports = alumniListController;