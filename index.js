var mongoose = require('mongoose');
var config = require('./config')

module.exports.config = function (config) {

    var db = mongoose.connect(config.database.url);
};

module.exports.apiBuilder = require('./lib/api/apibuilder');

module.exports.database = {
    user: require('./lib/models/user'),
    customer: require('./lib/models/customer'),
    cart: require('./lib/models/cart'),
    catalog: require('./lib/models/catalog'),
    order: require('./lib/models/order'),
    product: require('./lib/models/product')
};
