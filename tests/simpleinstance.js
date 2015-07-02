// using the framework node module
var frame8 = require('../../frame8/');

// condigurations
var config = {
    database: {
        url: 'mongodb://localhost/frame8'
    },
    api: {
        port: 8080
    }
};
frame8.config(config);

// building the database
frame8.database.user.build();
frame8.database.customer.build();
frame8.database.cart.build();
frame8.database.catalog.build();
frame8.database.customer.build();
frame8.database.order.build();
frame8.database.product.build();

//configuring the api server
var apiBuilder = frame8.apiBuilder;
apiBuilder.map();
apiBuilder.start();
