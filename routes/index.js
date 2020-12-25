const { group } = require('console');
var express = require('express');
var fs = require('fs'); //TODO Переделать через глобальную переменную
var lms_settings = require('../controllers/lms_settings');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  global.test = '555';
  global.test;
  var courses = global.lmscourses;//JSON.parse(fs.readFileSync('./public/settings.json'));
  var course = courses[0];
  var url = '', link = '';
  var ctasks_urls = [];
  var tasks = course.tasks;
  tasks.forEach(task => {
//  url = String('/studContent/%s/group1/task%s', course.stitle, task.id); //TODO сделать авторизацию и подстановку группы пользователя
   url = 'upload/course/' + course.stitle + '/task/' + task.id; //TODO сделать авторизацию и подстановку группы пользователя
   //url = (course.stitle)
   ctasks_urls.push({url: url, link: task.title});
  });
  res.render('index', { title: 'Express', ctasks_urls: ctasks_urls});
// res.redirect('/result');
});

module.exports = router;
