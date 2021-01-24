var express = require('express');
var router = express.Router();
/////////////////
var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
 
// html file containing upload form
//var upload_html = fs.readFileSync("/manager/upload_file.html");
 
// replace this with the location to save uploaded files
//upload_path = ".\\"; 

/* GET home page. */
//router.post('/', function(req, res, next) {
    router.post('/course/:courseId/task/:taskId/group/:groupId', function(req, res, next) {
        //  res.send("Test");
        //  res.write("test");
        //  res.render('upload_file');
        ///
var upload_path = "./public/studContent/";
var taskId= req.params.taskId;
var courseId= req.params.courseId;

var form = new formidable.IncomingForm();
form.parse(req, function (err, fields, files) {
    var username= fields.usercode;
    upload_path += courseId + '/task'+ taskId + '/group1/'+ username + '/'; // ставить группу после авторизации
/*    fs.mkdir(upload_path, err => { 
        if (err && err.code != 'EEXIST') throw err});*/ //TODO сделать асинхронную версию, сейчас выдает ошибку
        fs.existsSync(upload_path) || fs.mkdirSync(upload_path);    
    // oldpath : temporary folder to which file is saved to
    var oldpath = files.filetoupload.path;
    var newpath = upload_path + files.filetoupload.name;
    // copy the file to a new location
    fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        // you may respond with another html page
        var url = `/course/${courseId}/task/${taskId}/group/1`; // TODO ставить группу после авторизации 
        res.redirect('/result' + url);
 //       res.write('File uploaded and moved!');
 //       res.end();
    });
});

///
});

module.exports = router;
