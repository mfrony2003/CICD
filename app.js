var express = require('express');

var app = express();

//var passport = require("passport");
var passport = require("passport");

app.get('/', function (req, res) {
    res.send('Hello World!');
  });
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });

