var express = require('express');
var router = express.Router();

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
router.get('/', function(req, res, next) {
//  res.render('result', { file: '/public/studContent/user2.html'});
//res.send(data);
var filename1 = '/studContent/user1.html';
var filename2 = '/studContent/user2.html';
var username = 'tsi';
var frames = [];
for(var i = 0; i < 4; i++){
  frames.push({file: filename1, fio: username});
  frames.push({file: filename2, fio: username});
}
//frames = [];
res.render('result', {frames: frames, layout: false});
console.log("1");
//res.sendFile(__dirname + '/../public/studContent/result1.html');
//res.redirect('studContent/result1.html');
});

module.exports = router;
