(function() {

    // load the things we need
    var model = require('./model_proto');
    var inherits = require('util')
        .inherits;

    var mongoose = require('mongoose');
    var ObjectId = mongoose.Schema.Types.ObjectId;
    var Mixed = mongoose.Schema.Types.Mixed;


    function order() {

        model.call(this);

        this.modelName = "Order";

        // define the schema for our model
        this.modelSchema = mongoose.Schema({
            customer: {
                type: ObjectId,
                ref: 'Customer'
            },
            date: Date,
            paymentInfo: {},
            products: [{
                basePrice: Number,
                id: ObjectId,
                name: String,
                purchasePrice: Number,
                quantity: Number
            }],
            shippingInfo: {
                instructions: String,
                shippingAddress: {
                    address: String,
                    city: String,
                    country: String,
                    postalCode: String,
                    state: String
                }
            },
            status: String,
            total: Number
        });

        /**OVERRIDES *****************************************/
        //Override List
        // create: basic
        var create = function (args, callback) {
            
            var Product = mongoose.model("Product");
            var Catalog = mongoose.model("Catalog");
            var Cart = mongoose.model("Cart");
            
            order = {
                customer : args.customer,
                shippingInfo : args.shippingInfo,
                paymentInfo : args.paymentInfo
            }


            Cart.getById({ id: args.cart }, function (err, cart) { 
            
                if (err) callback(err, null);
                
                var products = []
                cart.products.forEach(function (elem) {
                
                    products.push({
                        name : elem.product.name,
                        id: elem.product.id,
                        basePrice: elem.product.price,
                        purchasePrice: elem.price,
                        quantity: elem.quantity
                    });
                });

                order.products = products;

                var baseModel = mongoose.model("Order");
                
                console.log(JSON.stringify(order));

                var modeInstance = new baseModel(order);
                
                modeInstance.save(function (err, obj) {
                    callback(err, obj);
                });
                
            })
            

        }
        create.method = "POST";
        create.path = this.modelName;
        this.modelSchema.statics.create = create;

    }

    // inherits
    inherits(order, model);

    // exports
    module.exports = exports = new order();
})();

/** 
* @api {post} /order/ create
* @apiDescription create an order
* @apiName create
* @apiGroup Order
*
* @apiParam {String} customer
* @apiParam {String} paymentInfo
* @apiParam {Object[]} products
* @apiParam {Number} products.basePrice
* @apiParam {String} products.id
* @apiParam {String} products.name
* @apiParam {Number} products.purchasePrice
* @apiParam {Number} products.quantity
* @apiParam {Object} shippingInfo
* @apiParam {String} shippingInfo.instructions
* @apiParam {Object} shippingInfo.shippingAddress
* @apiParam {Object} shippingInfo.shippingAddress.address
* @apiParam {Object} shippingInfo.shippingAddress.city
* @apiParam {Object} shippingInfo.shippingAddress.country
* @apiParam {Object} shippingInfo.shippingAddress.postalCode
* @apiParam {Object} shippingInfo.shippingAddress.state
*  
* @apiSuccess 200 Success
* @apiError 400
*/

/** 
* @api {get} /order/:id get
* @apiDescription get an order
* @apiName getById
* @apiGroup Order
*
* @apiParam {String} id
*  
* @apiSuccess Order
* @apiError 400 Order not found
*/

/** 
* @api {put} /order/ update
* @apiDescription update an order
* @apiName update
* @apiGroup Order
*
* @apiParam {String} id
* @apiParam {String} email
* @apiParam {String} name
* @apiParam {String} password 
*  
* @apiSuccess Order
* @apiError 400 Order not found
*/

/** 
* @api {delete} /order/:id remove
* @apiDescription remove an order
* @apiName remove
* @apiGroup Order
*
* @apiParam {String} id
*  
* @apiSuccess 200 Success
* @apiError 400 Order not found
*/

/**
* @api {get} /order/?limit&skip list
* @apiDescription list all orders
* @apiName list
* @apiGroup Order
*
*  
* @apiSuccess 200 Success
* @apiError 400 Order not found
*/
