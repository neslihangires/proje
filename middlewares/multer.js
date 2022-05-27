const multer = require('multer');
const path = require('path');
const slugify = require('slugify');


const myStorage = multer.diskStorage({ 
    destination: function (req, file, cb){
        cb(null, path.join(__dirname, '../public/img/kedi'));
    }, 

    filename: function (req, file, cb){
        
        cb(null, Date.now() + path.extname(file.originalname))
    }
});


const imgFileFilter = function(req, file, cb) {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true)
    }else{
        cb(null, false)
    }
};


const upload = multer({storage: myStorage, fileFilter: imgFileFilter});


module.exports = upload;