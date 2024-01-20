import multer from 'multer';
// import csv from 'csv-parser';


const bulkImport = (req, res)=> {
    
        const storage = multer.diskStorage({
            destination: function(req, file, cb) {
                cb(null, 'uploads/');
            },
            filename: function(req, file, cb) {
                cb(null, file.originalname);
            },
        });
        const upload = multer({storage: storage}).single('file');
        upload(req, res, function(err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err);
            } else if (err) {
                return res.status(500).json(err);
            }
            return res.status(200).send(req.file);
        });
        
    }
    

module.exports = {bulkImport};