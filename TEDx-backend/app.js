var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressFormidable = require('express-formidable');
// connect to database - MongoDB
require('./db/db')();

var app = express();

// Have to place this middleware before applying other middleware because they break adminbro
// Never ever mount any middleware before mounting adminbro, it just breaks
var adminRouter = require('./routes/adminbro');
app.use('/admin', adminRouter);

// set Content-Type header to application/json
app.use((req,res,next)=>{
	res.setHeader('Content-Type','application/json');
	res.setHeader('Access-Control-Allow-Origin',"*");
	res.setHeader('Access-Control-Allow-Headers',"*");
	next();
});

app.use(expressFormidable());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var albumRouter = require('./routes/albumRouter');
var blogRouter = require('./routes/blogRouter');
var organizerRouter = require('./routes/organizerRouter');
var speakerRouter = require('./routes/speakerRouter');

app.get('/', (req,res,next)=>{
  res.setHeader('Location','/admin');
  res.status(302).end();
});

app.use('/api/albums', albumRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/organizers', organizerRouter);
app.use('/api/speakers', speakerRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let error = new Error("Route not found");
  error.status = 400;
  next(error);
});

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  .json({
  	error: err.message
  });
});

module.exports = app;
