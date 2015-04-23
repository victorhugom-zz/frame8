var mongoose = require('mongoose');
var config = require('./config');

module.exports.config = function (config) { 

    var db = mongoose.connect(config.database.url);

};

module.exports.database = {
    admin: require('./lib/models/admin'),
    customer: require('./lib/models/customer'),
    cart: require('./lib/models/cart'),
    catalog: require('./lib/models/catalog'),
    customer: require('./lib/models/customer'),
    order: require('./lib/models/order'),
    product: require('./lib/models/product')
};