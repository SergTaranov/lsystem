var express = require('express');
var router = express.Router();
/////////////////
var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
 
// html file containing upload form
//var upload_html = fs.readFileSync("/manager/upload_file.html");
 
// replace this with the location to save uploaded files
var upload_path = "./public/studContent/";
//upload_path = ".\\"; 

/* GET home page. */
router.post('/', function(req, res, next) {
//  res.send("Test");
//  res.write("test");
//  res.render('upload_file');
///

var form = new formidable.IncomingForm();
form.parse(req, function (err, fields, files) {
    // oldpath : temporary folder to which file is saved to
    var oldpath = files.filetoupload.path;
    var newpath = upload_path + files.filetoupload.name;
    // copy the file to a new location
    fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        // you may respond with another html page
        res.write('File uploaded and moved!');
        res.end();
    });
});

///
});

module.exports = router;
