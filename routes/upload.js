var express = require('express');
var router = express.Router();
/////////////////
//var http = require('http');
//var fs = require('fs');
//var formidable = require('formidable');
 
// html file containing upload form
//var upload_html = fs.readFileSync("/manager/upload_file.html");
 
// replace this with the location to save uploaded files
//var upload_path = ".\\upload_files\\";
 

/* GET home page. */
router.get('/', function(req, res, next) {
//  res.send("Test");
//  res.write("test");
  res.render('upload_file', {layout: false});
  
//  res.write(upload_html);
});

module.exports = router;
