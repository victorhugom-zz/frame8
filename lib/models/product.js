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
      name: String,
      description: String,
      categories: [String],
      price: Number,
      composition: [
          {
            id: { type: ObjectId, ref: 'Product' },
            name: String,
            quantity: Number
          }],
      thumbnailUri: String,
      mediaFiles: [{
        type: String,
        uri: String
      }],
      physicalProduct: {
        height: Number,
        length: Number,
        weight: Number,
        width: Number,
        volume: Number,
      },
    });

    this.modelSchema.index({
      name: 'text'
    });

    /**
    * @apiIgnore 
    * @api {get} /product/setAsAvailable/:id set as available
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
    * @apiIgnore
    * @api {get} /product/setAsaUnvailable/:id set as unavailable
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
    * @apiIgnore
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
    
    
    /**OVERRIDES *****************************************/
    
    //Override List
    var list_override = function (args, callback) {

      args.filter ={};

      //filter by name
      if(args.name){
        args.filter.name = new RegExp('^.*'+args.name+'.*$', "i");
      }

      // filter by priceFrom and priceTo
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
    list_override.method = "GET";
    list_override.params = ['skip', 'limit'];
    list_override.path = this.modelName;
    this.modelSchema.statics.list_override = list_override;

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
* @apiSuccess {String} name
* @apiSuccess {Number} price
* @apiSuccess {Number} quantityAvailable
* @apiSuccess {Number} quantitySold
* @apiSuccess {String} thumbnailUri
* @apiSuccess {Boolean} available
* @apiSuccess {String[]} categories
* @apiSuccess {String} description
* @apiSuccess {Object[]} mediaFiles
* @apiSuccess {String} mediaFiles.type
* @apiSuccess {String} mediaFiles.uri
* @apiSuccess {Object} physicalProduct
* @apiSuccess {Number} physicalProduct.height
* @apiSuccess {Number} physicalProduct.length
* @apiSuccess {Number} physicalProduct.weight
* @apiSuccess {Number} physicalProduct.width
* @apiSuccess {Number} physicalProduct.volume
*
* @apiSuccess 200 Success
* @apiError 400
* 
*
* 
*/

/**
* @api {get} /product/:id get
* @apiDescription get an product
* @apiName getById
* @apiGroup Product
*
* @apiParam {String} id
*
* @apiSuccess {String} name
* @apiSuccess {Number} price
* @apiSuccess {Number} quantityAvailable
* @apiSuccess {Number} quantitySold
* @apiSuccess {String} thumbnailUri
* @apiSuccess {Boolean} available
* @apiSuccess {String[]} categories
* @apiSuccess {String} description
* @apiSuccess {Object[]} mediaFiles
* @apiSuccess {String} mediaFiles.type
* @apiSuccess {String} mediaFiles.uri
* @apiSuccess {Object} physicalProduct
* @apiSuccess {Number} physicalProduct.height
* @apiSuccess {Number} physicalProduct.length
* @apiSuccess {Number} physicalProduct.weight
* @apiSuccess {Number} physicalProduct.width
* @apiSuccess {Number} physicalProduct.volume
* 
* @apiError 400 Product not found
* 
* @apiSuccessExample {json} Success-Response:
* {
*     "created_at": "2015-07-02T17:28:16.412Z",
*     "updated_at": "2015-07-02T17:28:16.412Z",
*     "name": "El Jimador",
*     "price": 23,
*     "catalogs": [],
*     "__v": 0,
*     "active": true,
*     "mediaFiles": [],
*     "categories": [
*         "drink"
*     ],
*     "id": "559574b033d01ee42151be9b"
* },
*/

/**
* @api {put} /product/ update
* @apiDescription update an product
* @apiName update
* @apiGroup Product
*
* @apiSuccess {String} name
* @apiSuccess {Number} price
* @apiSuccess {Number} quantityAvailable
* @apiSuccess {Number} quantitySold
* @apiSuccess {String} thumbnailUri
* @apiSuccess {Boolean} available
* @apiSuccess {String[]} categories
* @apiSuccess {String} description
* @apiSuccess {Object[]} mediaFiles
* @apiSuccess {String} mediaFiles.type
* @apiSuccess {String} mediaFiles.uri
* @apiSuccess {Object} physicalProduct
* @apiSuccess {Number} physicalProduct.height
* @apiSuccess {Number} physicalProduct.length
* @apiSuccess {Number} physicalProduct.weight
* @apiSuccess {Number} physicalProduct.width
* @apiSuccess {Number} physicalProduct.volume
*
* @apiSuccess Product
* @apiError 400 Product not found
* 
* @apiSuccessExample {json} Success-Response:
* {
*     "created_at": "2015-07-02T17:28:16.412Z",
*     "updated_at": "2015-07-02T17:28:16.412Z",
*     "name": "El Jimador",
*     "price": 23,
*     "catalogs": [],
*     "active": true,
*     "mediaFiles": [],
*     "categories": [
*         "drink"
*     ],
*     "id": "559574b033d01ee42151be9b"
* },
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
* @api {get} /product/?limit&skip&priceFrom&priceTo&category list
* @apiDescription list all products
* @apiName list
* @apiGroup Product
*
* @apiSuccess {Object[]}  products
* @apiSuccess {String}    product.name
* @apiSuccess {Number}    product.price
* @apiSuccess {Number}    product.quantityAvailable
* @apiSuccess {Number}    product.quantitySold
* @apiSuccess {String}    product.thumbnailUri
* @apiSuccess {Boolean}   product.available
* @apiSuccess {String[]}  product.categories
* @apiSuccess {String}    product.description
* @apiSuccess {Object[]}  product.mediaFiles
* @apiSuccess {String}    product.mediaFiles.type
* @apiSuccess {String}    product.mediaFiles.uri
* @apiSuccess {Object}    product.physicalProduct
* @apiSuccess {Number}    product.physicalProduct.height
* @apiSuccess {Number}    product.physicalProduct.length
* @apiSuccess {Number}    product.physicalProduct.weight
* @apiSuccess {Number}    product.physicalProduct.width
* @apiSuccess {Number}    product.physicalProduct.volume
* 
* @apiError 400 Product not found
* 
* @apiSuccessExample {json} Success-Response:
* [
*     {
*         "created_at": "2015-07-02T17:28:16.412Z",
*         "updated_at": "2015-07-02T17:28:16.412Z",
*         "name": "El Jimador",
*         "price": 23,
*         "catalogs": [],
*         "__v": 0,
*         "active": true,
*         "mediaFiles": [],
*         "categories": [
*             "drink"
*         ],
*         "id": "559574b033d01ee42151be9b"
*     },
*     {
*         "created_at": "2015-07-02T17:27:36.447Z",
*         "updated_at": "2015-07-02T17:27:36.447Z",
*         "name": "Belvedere 1l",
*         "price": 130,
*         "catalogs": [],
*         "__v": 0,
*         "active": true,
*         "mediaFiles": [],
*         "composition": [],
*         "categories": [
*             "drink"
*         ],
*         "id": "5595748833d01ee42151be98"
*     }
* ]
*/
