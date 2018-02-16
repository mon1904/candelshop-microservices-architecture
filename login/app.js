var express = require('express');
var bodyParser = require("body-parser");
var cors = require('cors')
var app = express();
var mongoose = require('mongoose');
var assert = require('assert');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/candleshop');

var Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        email: String,
        password: String,
        username: String,
        role: String
    });

var user = mongoose.model('users', userSchema);

module.exports = user;

// login,  register

app.post('/login', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    console.log(req.body);

    user.findOne({username: req.body.username}, function(err, user) {
        if(err) res.status(401).end();
        if(user.password === req.body.password) {
            res.send(user);
        } else {
            res.status(401).end();
        }
    });

});

app.put('/register', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    console.log(req.body);


    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    // check if valid email and password is valid length
    if(EMAIL_REGEX.test(req.body.email) && req.body.password.length >= 6) {

        // check username doesnt exist
        user.findOne({username: req.body.username}, function(err, userResult) {
            if(userResult === null) {
                // check email doesnt exist
                user.findOne({email: req.body.email}, function(err, userResult) {
                    if(userResult === null) {
                        // user is valid, create
                        new user({
                            email: req.body.email,
                            password: req.body.password,
                            username: req.body.username,
                            role: "customer"
                        }).save(function (err, userResult) {
                            if (err) res.json(err);
                            res.send(userResult);
                        });
                    } else {
                        res.status(401).end();
                    }
                });
            } else {
                res.status(401).end();
            }
        });
    } else {
        res.status(401).end();
    }

});


app.listen(port);
