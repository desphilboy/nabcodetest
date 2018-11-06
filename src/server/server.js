var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./router.js');

var serverApp = express();

serverApp.use(bodyParser.json());
serverApp.use(bodyParser.urlencoded({ extended: true }));
serverApp.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'my-header, Content-Type, Accept');
  next();
});
routes(serverApp);

const port = process.env.PORT || 3009;

serverApp.listen(port);

console.log('NAB test RESTful API server started on port: ' + port);
