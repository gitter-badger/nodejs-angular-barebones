var express = require('express');
var request = require('request');
var responseParser = require('./responseParser');

var app = express();
app.use('/', express.static('public'));
app.use('/dist', express.static('dist'));
app.use('/bower_components', express.static('bower_components'));

app.get('/search', function(req, res) {
    request.get('https://www.google.co.uk/search?q=' + req.query.q, function (err, response, body) { 
        var results = responseParser.parse(body);
        res.send(results); });
});

module.exports = app;
