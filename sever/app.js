var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express(); //生成一个express实例 app
//连接数据库
require('./db/connect')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//挂载路由
app.use('/', require('./routes/index'));


//导出app实例供其他模块调用
module.exports = app;