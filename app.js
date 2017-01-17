// BASE SETUP

// call the packages we need

var express = require('express'); // call express
var app = express(); //define our app using express
var bodyParser = require('body-parser'); //let's us pull POST content from our HTTP request

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// ROUTES FOR OUR API

var router = express.Router(); // get an instance of the express router

// test route to make sure everything

router.get('/', function(req, res){
  res.json({ message: 'hooray!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
app.listen(port);
console.log('Magic happens on port ' + port);