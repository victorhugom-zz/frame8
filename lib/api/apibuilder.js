(function () {

    // required
    var mongoose = require('mongoose');
    var restify = require('restify');

    // create server
    var server = restify.createServer();
    server.pre(restify.pre.sanitizePath());
    server.use(restify.acceptParser(server.acceptable));
    server.use(restify.dateParser());
    server.use(restify.queryParser());
    server.use(restify.bodyParser());

    var createApiNodes = function (modelName) {

        var model = mongoose.model(modelName);
        var statics = mongoose.model(modelName).schema.statics;
        var names = Object.keys(statics);

        names.forEach(function (name) {

            var method = statics[name];

            if (name == "textSearch")
                return;

            var httpFunc = function (req, res, next) {
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "X-Requested-With");

                model[name](req.params, function (err, data) {
                    if (err)
                        res.send(400, new Error(err));
                    else
                        res.send(data);
                })
            }

            // get path
            var path = statics[name].path|| modelName.toLowerCase() + "/" + name + '/'
            path = path.toLowerCase();


            var method = statics[name].method.toLowerCase();
            if (statics[name].method.toLowerCase() == "delete")
                var method = "del";

            // map http method
            server[method](path, httpFunc);
        });
    }

    // map all apis methods
    exports.map = function () {
        createApiNodes("User");
        createApiNodes("Customer");
        createApiNodes("Product");
        createApiNodes("Cart");
        createApiNodes("Catalog");
        createApiNodes("Order");
    };

    // start the server
    exports.start = function (port) {
        port = port || 8080;

        server.get('map-routes', function (req, res, next) {
            res.send(server.router.mounts);
        });

        server.listen(port, function () {
            console.log('%s listening at %s', server.name, server.url);
        });
    }

})();
