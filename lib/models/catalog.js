(function () {

  // load the things we need
  var model = require('./model_proto');
  var inherits = require('util')
  .inherits;

  var mongoose = require('mongoose');
  var ObjectId = mongoose.Schema.Types.ObjectId;
  var relationship = require("mongoose-relationship");

  function catalog() {

    model.call(this);

    // define the model name
    this.modelName = "Catalog";

    // define the schema for our customer model
    this.modelSchema = mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      validUntil: Date,
      active: Boolean,
      products: [{
        _id: { type: ObjectId, ref: "Product" },
        name: String,
        description: String,
        categories: [],
        price: Number,
        quantityAvailable: Number,
        quantitySold: Number,
      }],
    });

    /*
    * functions
    */

    // returns the index if product already exists
    var productExists = function (productsArray, id) {
      return productsArray.some(function (element, index, arra) {
        if (element.id == id)
        return index;
      });
    };

    /*
    * schema methods
    * methods that we use only in the model instanca
    */

    /**
    * static methods
    * methods that we use to manipulate all Catalogs
    */


    /**
    * @api {post} /catalog/addproducts add products
    * @apiDescription add products into catalog
    * @apiName addProducts
    * @apiGroup Catalog
    *
    * @apiParam {String} id
    * @apiParam {Object[]} products
    *
    * @apiSuccess 200 Success
    * @apiError 400
    */
    var addProducts = function (args, callback) {
      throw "NOT IMPLEMENTED";
    }
    addProducts.method = "POST";
    this.modelSchema.statics.addProducts = addProducts;


    /**
    * @api {post} /catalog/removeproducts remove products
    * @apiDescription remove products from catalog
    * @apiName removeProducts
    * @apiGroup Catalog
    *
    * @apiParam {String} id
    * @apiParam {Object[]} products
    *
    * @apiSuccess 200 Success
    * @apiError 400
    */
    var removeProducts = function (args, callback) {
      throw "NOT IMPLEMENTED";
    }
    removeProducts.method = "POST";
    this.modelSchema.statics.removeProducts = removeProducts;

    /**
    * @api {get} /catalog/activate/:id activate
    * @apiDescription set the catalog as active
    * @apiName activate
    * @apiGroup Catalog
    *
    * @apiParam {String} id
    *
    * @apiSuccess Success
    * @apiError Catalog not found
    */
    var activate = function (args, callback) {
      args.active = true;
      this.upd(args, callback);
    };
    activate.method = "GET";
    activate.path = "catalog/activate/:id"
    this.modelSchema.statics.activate = activate;

    /**
    * @api {get} /catalog/deactivate/:id deactivate
    * @apiDescription set the catalog as active
    * @apiName deactivate
    * @apiGroup Catalog
    *
    * @apiParam {String} id
    *
    * @apiSuccess Success
    * @apiError Catalog not found
    */
    var deactivate = function (args, callback) {
      args.active = false;
      this.upd(args, callback);
    };
    deactivate.method = "GET";
    deactivate.path = "catalog/deactivate/:id"
    this.modelSchema.statics.deactivate = deactivate;


    /**
    * @api {post} /catalog/search/ search
    * @apiDescription search for a product
    * @apiName search
    * @apiGroup Catalog
    *
    * @apiParam {String} query
    * @apiParam {String} id
    *
    * @apiSuccess Success
    * @apiError not found
    */
    var search = function (args, callback) {
      throw "NOT IMPLEMENTED";
    };
    search.method = "POST";
    this.modelSchema.statics.search = search;

    /**OVERRIDES *****************************************/

    //Override List
    var list = function (args, callback) {

      //filter by name
      if(args.name){
        var query = this.find({name : new RegExp('^.*'+args.name+'.*$', "i")});
      }else {
        var query = this.find();
      }

      return this.list(args, callback);
    }
    list.method = "GET";
    list.path = "catalog";
    this.modelSchema.statics.list = list;

  }

  // inherits
  inherits(catalog, model);

  // exports
  module.exports = exports = new catalog();

})();


/**
* @api {post} /catalog/ create
* @apiDescription create an catalog
* @apiName create
* @apiGroup Catalog
*
* @apiParam {String} name
* @apiParam {Boolena} active
*
* @apiSuccess 200 Success
* @apiError 400
*/

/**
* @api {get} /catalog/:id get
* @apiDescription get an catalog
* @apiName getById
* @apiGroup Catalog
*
* @apiParam {String} id
*
* @apiSuccess Catalog
* @apiError 400 Catalog not found
*/

/**
* @api {put} /catalog/ update
* @apiDescription update an catalog
* @apiName update
* @apiGroup Catalog
*
* @apiParam {String} id
* @apiParam {String} email
* @apiParam {String} name
* @apiParam {String} password
*
* @apiSuccess Catalog
* @apiError 400 Catalog not found
*/

/**
* @api {delete} /catalog/:id remove
* @apiDescription remove an catalog
* @apiName remove
* @apiGroup Catalog
*
* @apiParam {String} id
*
* @apiSuccess 200 Success
* @apiError 400 Catalog not found
*/

/**
* @api {get} /catalog/?limit&skip list
* @apiDescription list all catalogs
* @apiName list
* @apiGroup Catalog
*
*
* @apiSuccess 200 Success
* @apiError 400 Catalog not found
*/
