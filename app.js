var express = require('express');

var app = express();
app.use('/', express.static('public'));
app.use('/dist', express.static('dist'));
app.use('/bower_components', express.static('bower_components'));

app.get('/search', function(req, res) {
    var results = {
        results: [{"text": "AngularJS — Superheroic JavaScript MVW Framework"}]
    };
    res.send(results);
});

module.exports = app;
