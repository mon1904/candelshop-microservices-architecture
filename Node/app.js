var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var mongoose = require('mongoose');
var assert = require('assert');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/candleshop');

var Schema = mongoose.Schema;

var candleSchema = new Schema(
    {
    name: String,
    smell : String,
    color : String,
    price : String,
    url: String,
        quantity: String

});

var candle = mongoose.model('candle', candleSchema);

module.exports = candle;

app.post('/addCandle', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

    console.log(req.body);

    new candle({
        name: req.body.name,
        smell: req.body.smell,
        color: req.body.color,
        price: req.body.price,
        url: req.body.url,
        quantity : req.body.quantity


    }).save(function (err, doc) {
        if (err) res.json(err);
    })
});

app.get('/getCandle', function(req, res) {
    candle.find(function(err, results) {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
});


app.delete('/deleteCandle', function(req, res) {
    console.log(req.body);

    mongoose.model("candle").remove({_id:req.body.id}, function(err,delData){
        if (err) throw err;
        res.send(req.param.id)
    });
});


app.post('/addOrder', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    console.log(req.body);

    new candle({
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
