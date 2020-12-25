var fs = require('fs'); //TODO Переделать через глобальную переменную
var settings = JSON.parse(fs.readFileSync('./public/settings.json'));
var courses = JSON.parse(fs.readFileSync('./public/courses.json'));

global.lmssettings = settings;
global.lmscourses = courses;