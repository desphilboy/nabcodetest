var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });

  app.get('/coinsdata', function (req, res) {
  	console.log('the request url is: ',req.url);
    var data = require('./stubs/sample-crypto-data.js');
    res.status(200).send(data);
  });
}

module.exports = appRouter;
