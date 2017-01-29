var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:3000
app.get('/About', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
    
});

app.get('/Contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/contact.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000);