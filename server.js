var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require("path");
var userCtrl = require('./userCtrl');
var app = express();
var port = 3006;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/api/users', function(req, res) {
    console.log("query!!!", req.query);
    var response = userCtrl.readAll();
    res.status(200).send(response);
});

app.get('/api/users/:id', function(req, res) {
    var stat = 404;
    var response = userCtrl.findUserById(req.params.id);
    if (response) stat = 200;
    res.status(stat).send(response);
});

app.get('/api/admins', function(req, res) {
    var response = userCtrl.getAdmins();
    res.status(200).send(response);
});

app.get('/api/nonadmins', function(req, res) {
    var response = userCtrl.getNonAdmins();
    res.status(200).send(response);
});

app.put('/api/users/:id', function(req, res) {
    //console.log(req.body);
    var response = userCtrl.updateUser(req.params.id, req.body);
    //console.log(response);
    res.status(200).send(response);
});

app.post('/api/users', function(req, res) {
    //console.log(req);
    var response = userCtrl.createUser(req.body);
    //console.log(response);
    res.status(200).send(response);
});

app.delete('/api/users/:id', function(req, res) {
    var response = userCtrl.removeUser(req.params.id);
    res.status(200).send(response);
});

/*
app.listen(port, function(){
    console.log("listening on port #" + port);
});
*/

module.exports = app;