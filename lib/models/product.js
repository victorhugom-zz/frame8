(function () {

  // load the things we need
  var model = require('./model_proto');
  var inherits = require('util')
  .inherits;

  var mongoose = require('mongoose');
  var ObjectId = mongoose.Schema.Types.ObjectId;

  function product() {


    model.call(this);

    this.modelName = "Product";

    // define the schema for our product model
    this.modelSchema = mongoose.Schema({
      categories: [String],
      description: String,
      mediaFiles: [{
        type: String,
        uri: String
      }],
      name: String,
      physicalProduct: {
        height: Number,
        length: Number,
        weight: Number,
        width: Number,
        volume: Number,
      },
      price: Number,
      thumbnailUri: String,
      catalogs: [{
        type: ObjectId,
        ref: "Catalog",
      }]
    });

    this.modelSchema.index({
      name: 'text'
    });

    /**
    * @api {get} /product/setasavailable/:id set as available
    * @apiDescription set the product as available
    * @apiName setAsAvailable
    * @apiGroup Product
    *
    * @apiParam {String} id
    *
    * @apiSuccess Success
    * @apiError Product not found
    */
    var setAsAvailable = function (args, callback) {
      args.active = true;
      this.upd(args, callback);
    };
    setAsAvailable.method = "GET";
    setAsAvailable.path = "product/setasavailable/:id"
    this.modelSchema.statics.setAsAvailable = setAsAvailable;

    /**
    * @api {get} /product/setasaunvailable/:id set as unavailable
    * @apiDescription set the product as unavailable
    * @apiName setAsUnAvailable
    * @apiGroup Product
    *
    * @apiParam {String} id
    *
    * @apiSuccess Success
    * @apiError Product not found
    */
    var setAsUnAvailable = function (args, callback) {
      args.active = false;
      this.upd(args, callback);
    };
    setAsUnAvailable.method = "GET";
    setAsUnAvailable.path = "product/setasaunvailable/:id"
    this.modelSchema.statics.setAsUnAvailable = setAsUnAvailable;

    /**
    * @api {post} /product/updateprice/ update price
    * @apiDescription update product price
    * @apiName updatePrice
    * @apiGroup Product
    *
    * @apiParam {String} id
    * @apiParam {Number} price
    *
    * @apiSuccess Success
    * @apiError Product not found
    */
    var updatePrice = function (args, callback) {
      this.upd(args, callback);
    };
    updatePrice.method = "POST";
    this.modelSchema.statics.updatePrice = updatePrice;

    /**
    * @api {post} /product/search/ search
    * @apiDescription search for a product
    * @apiName search
    * @apiGroup Product
    *
    * @apiParam {String} query
    *
    * @apiSuccess Success
    * @apiError Product not found
    */
    var search = function (args, callback) {

      args.filter ={};

      //filter by name
      if(args.name){
        args.filter.name = new RegExp('^.*'+args.name+'.*$', "i");
      }

      // filter by price
      if(args.priceFrom && args.priceTo ){
        args.filter.price = { $gt: args.priceFrom, $lt: args.priceTo };
      }
      else if(args.priceFrom){
        args.filter.price = { $gt: args.priceFrom };
      }
      else if(args.priceTo ){
        args.filter.price = { $lt: args.priceTo };
      }

      // filter by category
      if(args.category){
        args.filter.categories = args.category;
      }

      return this.list(args, callback);
    };

    search.method = "GET";
    search.params = ['skip', 'limit'];
    search.path = this.modelName;
    this.modelSchema.statics.search = search;

  }

  // inherits
  inherits(product, model);

  // exports
  module.exports = exports = new product();

})();


/**
* @api {post} /product/ create
* @apiDescription create a product
* @apiName create
* @apiGroup Product
*
* @apiParam {String} name
* @apiParam {Number} price
* @apiParam {Number} quantityAvailable
* @apiParam {Number} quantitySold
* @apiParam {String} thumbnailUri
* @apiParam {Boolean} available
* @apiParam {String[]} categories
* @apiParam {String} description
* @apiParam {Object[]} mediaFiles
* @apiParam {String} mediaFiles.type
* @apiParam {String} mediaFiles.uri
* @apiParam {Object} physicalProduct
* @apiParam {Number} physicalProduct.height
* @apiParam {Number} physicalProduct.length
* @apiParam {Number} physicalProduct.weight
* @apiParam {Number} physicalProduct.width
*
* @apiSuccess 200 Success
* @apiError 400
*/

/**
* @api {get} /product/:id get
* @apiDescription get an product
* @apiName getById
* @apiGroup Product
*
* @apiParam {String} id
*
* @apiSuccess Product
* @apiError 400 Product not found
*/

/**
* @api {put} /product/ update
* @apiDescription update an product
* @apiName update
* @apiGroup Product
*
* @apiParam {String} id
* @apiParam {String} name
* @apiParam {Number} price
* @apiParam {Number} quantityAvailable
* @apiParam {Number} quantitySold
* @apiParam {String} thumbnailUri
* @apiParam {Boolean} available
* @apiParam {String[]} categories
* @apiParam {String} description
* @apiParam (mediaFiles) {Object[]} mediaFiles
* @apiParam (mediaFiles) {String} mediaFiles.type
* @apiParam (mediaFiles) {String} mediaFiles.uri
* @apiParam (physicalProduct) {Object} physicalProduct
* @apiParam (physicalProduct) {Number} physicalProduct.height
* @apiParam (physicalProduct) {Number} physicalProduct.length
* @apiParam (physicalProduct) {Number} physicalProduct.weight
* @apiParam (physicalProduct) {Number} physicalProduct.width
*
* @apiSuccess Product
* @apiError 400 Product not found
*/

/**
* @api {delete} /product/:id remove
* @apiDescription remove an product
* @apiName remove
* @apiGroup Product
*
* @apiParam {String} id
*
* @apiSuccess 200 Success
* @apiError 400 Product not found
*/

/**
* @api {get} /product/?limit&skip list
* @apiDescription list all products
* @apiName list
* @apiGroup Product
*
*
* @apiSuccess 200 Success
* @apiError 400 Product not found
*/
