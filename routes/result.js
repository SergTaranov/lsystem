var express = require('express');
var router = express.Router();
var fs = require('fs');
//////////
var data= '<!DOCTYPE  HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"\>\n'+
'<html>\n'+
 '<head>\n'+
  '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n'+
  '<title>Результаты</title>\n'+
 '</head>\n'+
   '<frameset cols="50%,50%", rows="25%,25%,25%,25%">\n';
  for (var i = 0; i < 8; i++){
    data += '<frame src="/studContent/user1.html" name="1">\n';
  }  
    data += '</frameset>\n';  
data += '</html>';
//////////

/* GET home page. */
router.get('/course/:courseId/task/:taskId/group/:groupId', function(req, res, next) {
//router.get('/course', function(req, res, next) {
//  res.render('result', { file: '/public/studContent/user2.html'});
//res.send(data);
var courseId= req.params.courseId;
var taskId= req.params.taskId;
var groupId= req.params.groupId;
var path= `/studContent/${courseId}/task${taskId}/group${groupId}/`; // ставить группу после авторизации

var filename1 = path + 'tsi/index.html';
var filename2 = path + 'xxx/index.html';
var folders = fs.readdirSync(`./public/${path}`, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);
var username = 'tsi';
var frames = [];
for(var i = 0; i < folders.length; i++){
  frames.push({file: `${path + folders[i]}/index.html`, fio: folders[i]});
 // frames.push({file: filename2, fio: username});
}
//frames = [];
res.render('result', {frames: frames, layout: false});
console.log("1");
//res.sendFile(__dirname + '/../public/studContent/result1.html');
//res.redirect('studContent/result1.html');
});

module.exports = router;
