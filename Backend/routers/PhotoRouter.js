const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

isDirExist = (req, res, next) => {
  fs.stat(path.join(__dirname, `../uploads/${req.params.id}`), (err) => {
    console.log('1', err)
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
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log(req);
    cb(null, path.join(`uploads/${req.params.id}`))
  },
  filename: function (req, file, cb) {
    console.log(file.fieldname);
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })

let router = express.Router();

router.post('/:id', isDirExist, upload.single('image'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.body)
  console.log(req.file)
  res.status(201).send('success')
})

module.exports = router;
