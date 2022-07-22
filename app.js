var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var app = express();
var fs = require('fs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
/* GET bluey page. */
app.get('/bluey', function(req, res, next) {
  res.render('bluey', { title: 'bluey' });

});
const people = [
  { name: 'John', age: 20 },
  { name: 'Jane', age: 21 },
  { name: 'Bob', age: 22 },
];
const blueyCharacters = 
  //get each file name from directory
  fs.readdirSync('./public/img/bluey/').map(file => {
    return {
      name: file
    };
  })
app.get('/bluey/small', function(req, res, next) {
  res.locals.size = 'small';
  res.render('bluey', {blueyCharacters});

});
app.get('/bluey/medium', function(req, res, next) {
  res.locals.size = 'medium';
  res.render('bluey', { title: 'bluey' });
});
app.get('/bluey/large', function(req, res, next) {
  res.locals.size = 'large';
  res.render('bluey', { title: 'bluey' });
});
app.get('/frozen', function(req, res, next) {
  res.render('frozen', { title: 'frozen' });
});
app.get('/phineas', function(req, res, next) {
  res.render('phineas', { title: 'phineas' });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3000);
console.log('Server running on port 3000');
module.exports = app;



