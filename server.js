var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hoganExpress = require('hogan-express');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.set('layout', 'layout');
app.enable('view cache');
app.engine('html',hoganExpress);

if (app.get('env') === 'production') {
  var _resManifest = require('./public/resources/resources-manifest-output.json');
  app.resourcesManifest = { application_js: _resManifest["application.js"], application_css: _resManifest["application.css"]};
}
else app.resourcesManifest = { "application_js": "application.js", "application_css": "application.css"};


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// IMPORTANT: handle routes in the front end. see react-router https://goo.gl/1CZMd8
// i.e. handle every other route with index.html (search: Configuring Your Server
// TODO: should figure out a better way.. at least autogenerate it.
app.use('/welcome', routes);
app.use('/breakfast', routes);
app.use('/lunch', routes);
app.use('/dinner', routes);

// support hot-loading (only in dev mode) here
if (app.get('env') === 'development') {
  console.log("node running in development, using webpack-dev-middleware");
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config');
  var compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath:'/resources',
    stats: { colors:true }
  }));
  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log,  path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
