/**
 * Server.
 */

// set up ========================
var express = require('express');
var app = express(); // create our app w/ express
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var request = require('request'); // do http requests
var cookieParser = require('cookie-parser'); // to user cookies


// configuration =================
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride());
// parse cookies
app.use(cookieParser());

// static files
app.use("/bower_components", express.static(__dirname + "/bower_components"));
// app.use("/template", express.static(__dirname + "/bower_components/metronic"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/views", express.static(__dirname + "/views"));
app.use("/src", express.static(__dirname + "/src"));
app.use("/", express.static(__dirname + "/"));

// app.get('*', authenticate, function(req, res) {
//     res.sendfile('./views/master/master.html');
// });

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/tuto2');
var schema = mongoose.Schema({
    category: String,
    price: Number,
    stocked: Boolean,
    name: String
});
var product = mongoose.model('product', schema);

// create product
app.post('/product', function(req, res) {
    console.log(req.body);
    // create a product entry
    new product(req.body).save(function(err, obj) {
        if (err) {
            console.log(new Date().toUTCString() + ' : DB Error:', err);
            setTimeout(loadUrl, 10000);
        } else {
            console.log('saved');
            res.send(req.body);
        }
    });
});

// get product
app.get('/product', function(req, res) {
    product.find()
        .exec(function(err, data) {
            if (err) {
                console.log('error');
                res.send('error');
            } else {
                console.log('got');
                res.send(data);
            }
        });
});

app.get('*', function(req, res) {
    res.sendfile('index.html');
});

// listen (start app with node server.js) ======================================
app.listen(8085);
console.log("App listening on port 8085");
