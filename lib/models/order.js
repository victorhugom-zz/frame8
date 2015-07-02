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
      customer: {type: ObjectId, ref: 'Customer'},
      seller: {type: ObjectId, ref: 'User'},
      date: Date,
      payments: [{
        type: String,
        flag: String,
        value: Number
      }],
      products: [{
        _id: ObjectId,
        name: String,
        price: Number,
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

    // create: basic
    /**
    * @api {post} /order/ create
    * @apiDescription create an order
    * @apiName create
    * @apiGroup Order
    *
    * @apiSuccess {Object[]} payments 			  Payment List
    * @apiSuccess {String} 	 payment.type 		Payment type
    * @apiSuccess {String} 	 payment.flag 		Payment flag (if by card)
    * @apiSuccess {Number} 	 payment.value		Payment type name
    * @apiSuccess {Object[]} products			    Product List
    * @apiSuccess {String}   products.id 	  	Product id
    * @apiSuccess {String}   products.quantity 		Product Quantity
    * @apiSuccess {String}   sellerId 	         	Seller id
    * @apiParam {Object} shippingInfo
    * @apiParam {String} shippingInfo.instructions
    * @apiParam {Object} shippingInfo.shippingAddress
    * @apiParam {Object} shippingInfo.shippingAddress.address
    * @apiParam {Object} shippingInfo.shippingAddress.city
    * @apiParam {Object} shippingInfo.shippingAddress.country
    * @apiParam {Object} shippingInfo.shippingAddress.postalCode
    * @apiParam {Object} shippingInfo.shippingAddress.state
    * @apiSuccess 200 Success
    * @apiError 400
    */
    var create = function (args, callback) {

      var Catalog = mongoose.model("Catalog");
      var User = mongoose.model("User");
      var Product = mongoose.model("Product");

      var order = {
        payments : args.payments,
        shippingInfo : args.shippingInfo,
        sellerId: args.sellerId,
        status: args.staus || 'finished',
      };

      var products = [];
      var productsMap = args.products.reduce(function(actual, previous){
        return pervious[actual.id] =  actual.quantity;
      }, {});

      //get products
      Catalog.find({'_id': args.catalogId})
      .populate({
        path: 'products',
        match: {'_id': { $in: Object.keys(productsMap) },}
      })
      .exec(function (err, data) {

        data.forEach(function (elem) {

          products.push({
            id: elem.id,
            name : elem.name,
            price: elem.price,
            quantity: productsMap[elem.id],
          });

        });
      });

      order.products = products;

      var orderModel = mongoose.model("Order");
      var orderInstance = new orderModel(order);

      orderInstance.save(function (err, obj) {
        callback(err, obj);
      });

      create.method = "POST";
      create.path = this.modelName;
      this.modelSchema.statics.create = create;
    }
  }


  // inherits
  inherits(order, model);

  // exports
  module.exports = exports = new order();
})();


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
