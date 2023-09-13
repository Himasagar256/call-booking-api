const multer  = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const storage = new GridFsStorage({
    url: 'mongodb://127.0.0.1/mydb',
    file: (req,file) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')  {
            let filename = 'file_'+Date.now()
            req.body.image = filename
            return{
                bucketName: 'images',
                filename
            } 
} else {
    return null
}
    }
});
const upload = multer({ storage });
module.exports = {upload}

    
