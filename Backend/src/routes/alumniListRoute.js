// list of all alumni
// Path: Backend/src/routes/alumniList.js
const express = require('express');
const router = express.Router();
const alumnilistController = require('../controllers/alumnilistController');
const checkAuth = require('../middlewares/checkAuth');

router.get('/alumniList',checkAuth,alumnilistController);

module.exports = router;

