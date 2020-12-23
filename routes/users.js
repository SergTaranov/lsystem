var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET users listing. */
router.get('/', function(req, res, next) {
  var fio = req.query.fio;
  var dir = req.query.dir;
  var course = req.query.course;
  var group = req.query.group;
//http://localhost:3000/users?fio=zzz&dir=zzz&course=js&group=1
  var person = {
    fio : fio, 
    home: dir, 
    courses : [{course : course, group : group}]}

  savePersonToPublicFolder(person, function(err) {
    if (err) {
      res.status(404).send('User not saved');
      return;
    }

    res.send('User saved');
 //   return;
 //   res.end();
  });
});

function savePersonToPublicFolder(person, callback) {
  var groups = [{id : 1 , name : 'js'}, {id : 2, name : 'html'}]; 
  var users = [
    {fio : 'sergey t', home: 'tsi', courses : [{course :'js', group:'1'}]},
    {fio : 'user 1', home: 'xxx', courses : [{course :'js', group:'1'}]},
    {fio : 'user 2', home: 'yyy', courses : [{course :'js', group:'1'}]}];
//  var settings = {groups : groups, users : users};
  
  var courses = [{title : 'JavaScript', stitle : 'js', tasks : [{id : 1, title : 'Упражнение 1', description : 'Сложить 2 числа', args : [2,5]}]},
                {title : 'JavaScript', stitle : 'js', tasks : [{id : 1, title : 'Упражнение 2', description : 'Умножить 2 числа', args : [2,5]}]}];  
  
  var settings = JSON.parse(fs.readFileSync('./public/settings.json',));
  settings.users.push(person);
  fs.writeFile('./public/settings.json', JSON.stringify(settings), callback);
//  fs.writeFile('./public/courses.json', JSON.stringify(courses), callback);
}

module.exports = router;
