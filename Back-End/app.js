var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var ft1Router = require('./routes/ft1');
var ft3Router = require('./routes/ft3');
var ft4Router = require('./routes/ft4');
var ft5Router = require('./routes/ft5');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ft1', ft1Router);
app.use('/ft3', ft3Router);
app.use('/ft4', ft4Router);
app.use('/ft5', ft5Router);


module.exports = app;
