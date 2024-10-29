var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('../routes/index');
var carsRouter = require('../routes/cars');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/cars', carsRouter);

// For catching the 404 and forwarding it to error handler:
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // For sending the error message:
  res.status(err.status || 500);
  res.json({ 
    success: false,
    message: err.message
   });
});

module.exports = app;
