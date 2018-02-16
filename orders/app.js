var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var mongoose = require('mongoose');
var assert = require('assert');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 3003;

mongoose.connect('mongodb://localhost:27017/candleshop');

var Schema = mongoose.Schema;

var orderSchema = new Schema(
    {
        name: String,
        address : String,
        cardnumber : String,
        cvc : String,
        edate: String,

    });

var orders = mongoose.model('orders', orderSchema);

module.exports = orders;


app.post('/addOrder', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

    console.log(req.body);

    new orders({
        name: req.body.name,
        address: req.body.address,
        cardnumber: req.body.cardnumber,
        cvc: req.body.cvc,
        edate: req.body.edate,



    }).save(function (err, doc) {
        if (err) res.json(err);
    })
});
app.listen(port);
