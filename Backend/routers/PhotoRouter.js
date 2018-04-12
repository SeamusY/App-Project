const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(req);
        cb(null, path.join(`uploads/${req.params.id}`))
    },
    filename: function (req, file, cb) {
        console.log(file.fieldname);
        cb(null, file.fieldname + '-' + Date.now())
    }
})

module.exports = class PhotoRouter {
    constructor() {
        // this.photoService = photoService;
        this.upload = multer({ storage: storage })
    }

    // check if the directory existed 
    isDirExist (req, res, next) {
        fs.stat(path.join(__dirname, `../uploads/${req.params.id}`), (err) => {
            if (!err) {
                next();
            }
            fs.mkdir(path.join(__dirname, `../uploads/${req.params.id}`), (err) => {
                if (err) {
                    console.log('2', err)
                }
                next()
            })
        })
    }

    router() {
        let router = express.Router();
        router.post('/:id', this.isDirExist, this.upload.single('image'), this.post.bind(this));
        return router;
    }

    post(req, res){
        console.log(req.body)
        console.log(req.file)
        return res.status(201).send('success')
    }
} 