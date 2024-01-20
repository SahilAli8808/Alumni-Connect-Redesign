const express = require('express');
const router = express.Router();
const bulkImportController = require('../controllers/bulkImportController');

router.post('/bulkImport', bulkImportController.bulkImport);

module.exports = router;