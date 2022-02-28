var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var hbs = require('express-handlebars')
var hbs = require("express-handlebars")

var indexRouter = require('./routes/index');
var cryptoRouter = require('./routes/cryptoRouter');

var app = express();
const mongoose = require("mongoose")
const cryptoDetailsModel = require("./models/crypto");
const { json } = require('express');

const db = require("./configs/dbconnect")
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//setting up engine for layout and partials
app.engine('hbs', hbs.engine({
  extname: 'hbs', defaultLayout: 'layout',
  layoutsDir: __dirname + '/views/layout/',
  partialsDir: __dirname + '/views/partials/',
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/crypto', cryptoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
