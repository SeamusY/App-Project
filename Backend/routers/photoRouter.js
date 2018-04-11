const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' })

let router = express.Router();


router.post('/', upload.single('image'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.body)
    console.log(req.file)
    res.status(201).send('success')
  })

 module.exports = router;
  