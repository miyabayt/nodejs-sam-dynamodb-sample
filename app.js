var dotenv = require('dotenv');
var options = {}
if (process.env.NODE_ENV !== 'local'
      && process.env.NODE_ENV !== 'test:bs'
      && process.env.NODE_ENV !== 'test:local') {
  options.path = `.env.${process.env.NODE_ENV}`;
}
dotenv.config(options);

var serverlessExpress = require('aws-serverless-express/middleware');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var csrf = require('csurf');
var helmet = require('helmet');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// aws serverless express
if (process.env.AWS_REGION !== 'local') {
  app.use(serverlessExpress.eventContext());
}

if (process.env.NODE_ENV !== 'test:bs' && process.env.NODE_ENV !== 'test:local') {
  app.use(logger('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(csrf({
  cookie: {
    httpOnly: true,
    secure: process.env.AWS_REGION !== 'local',
    sameSite: true
  }
}));
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/javascripts', express.static(__dirname + '/node_modules/html5shiv/dist'));
app.use('/javascripts', express.static(__dirname + '/node_modules/respond.js/dest'));

var store = require('./lib/dynamodb-store')(session);
app.use(session({
  store: store,
  name: 'sid',
  secret: 'changeme',
  resave: false,
  saveUninitialized: false,
  proxy: true,
  cookie: {
    maxAge: 60 * 60 * 1000,
    secure: process.env.AWS_REGION !== 'local',
    sameSite: true
  }
}));

app.use('*', (req, res, next) => {
  res.set('cache-control', 'no-store, no-cache, max-age=0');
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in local
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'local' ? err : {};
  console.error(err);

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  return;
});

module.exports = app;
