var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var url = require('url');
// var favicon = require('serve-favicon');
// var errorHandler = require('errorhandler');
var logger = require('morgan');
var historyApiFallback = require('connect-history-api-fallback');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

// all environments
var PORT = normalizePort(process.env.PORT || process.argv[2] || 8080);
app.set('port', PORT);

// Serve static assets normally
app.use(express.static(path.resolve(__dirname, 'public')));

// Handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.use(historyApiFallback({ verbose: false }));

// Logger
app.use(logger('dev'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// Ensure that anything not routed is captured here
app.get('*', (req, res, next) => {
  return res
          .status(200)
          .type('text/html')
          .sendFile(path.join(__dirname, './public/index.html'));

});


http.createServer(app).listen(PORT, function(){
  console.log(`Express server listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}