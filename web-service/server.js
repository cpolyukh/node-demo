/*
    server.js
    main server script for our task list web service
*/

var port = 8080;

//to load all modules we need
//express web server framework
var express = require('express');

//create a new express app
var app = express();

/*//add a route for our home page
app.get('/', function(req, res) {
    res.send('<h1>Hello World!</h1>');
});*/

app.use(express.static(__dirname + '/static'));

//start the server
app.listen(port, function() {
    console.log('server is listening on http://localhost:' + port);
});