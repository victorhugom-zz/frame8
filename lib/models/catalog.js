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
          id: { type: ObjectId, ref: "Product" },
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

    /*
    * schema methods
    * methods that we use only in the model instanca
    */

    /**
    * static methods
    * methods that we use to manipulate all Catalogs
    */


    /**
    * @apiIgnore Not finished Metho
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
    * @apiIgnore Not finished Metho
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
    
    /**OVERRIDES *****************************************/
    
    //Override List
    var list_override = function (args, callback) {
      
      //filter by name
      if (args.name) {
        var query = this.find({ name : new RegExp('^.*' + args.name + '.*$', "i") });
      } else {
        var query = this.find();
      }
      
      return this.list(args, callback);
    }
    list_override.method = "GET";
    list_override.path = this.modelName;
    this.modelSchema.statics.list_override = list_override;

  }
  
  // inherits
  inherits(catalog, model);
  
  // exports
  module.exports = exports = new catalog();

})();


/**
* @api {post} /catalog/ create
* @apiDescription create a catalog
* @apiName create
* @apiGroup Catalog
*
* @apiParam {String} name     Catalog Name
* @apiParam {Boolean} active  Catalog Status 
* @apiParam {Date} validUntil Catalog expire date
* 
* @apiParam {Object[]}  products                Product List
* @apiParam {String}    product.id              Product Id
* @apiParam {String}    product.name            Product Name
* @apiParam {String}    product.decription      Product Descrption
* @apiParam {String[]}  product.categories      Product Categories
* @apiParam {String}    product.quantityAvailable Product Quantity Available
*
* @apiSuccess 200 Success
* 
* @apiError 400 Error
*/

/**
* @api {get} /catalog/?limit&skip&name list
* @apiDescription list all catalogs
* @apiName list
* @apiGroup Catalog
* @apiSuccess 200 Success
* @apiSuccess {Object[]}catalogs            Catalog List
* @apiSuccess {String}  catalog.name        Catalog Name
* @apiSuccess {Boolean} catalog.active      Catalog Status 
* @apiSuccess {Date}    catalog.validUntil  Catalog expire date
*
* @apiError 400 Error
*/


/**
* @api {get} /catalog/:id get
* @apiDescription get an catalog
* @apiName getById
* @apiGroup Catalog
*
* @apiParam {String} id
*
* @apiSuccess {String}    name                    Catalog Name
* @apiSuccess {Boolean}   active                  Catalog Status 
* @apiSuccess {Date}      validUntil              Catalog expire date
* @apiSuccess {Object[]}  products                Product List
* @apiSuccess {String}    product.id              Product Id
* @apiSuccess {String}    product.name            Product Name
* @apiSuccess {String}    product.decription      Product Descrption
* @apiSuccess {String[]}  product.categories      Product Categories
* @apiSuccess {String}    product.quantityAvailable Product Quantity Available
* 
* @apiError 400 Catalog not found
*
* @apiSuccessExample {json} Success-Response:
* {
*     "active": true,
*     "id": "5595b081441a09b023377ba0"
*     "created_at": "2015-07-02T21:43:29.172Z",
*     "updated_at": "2015-07-02T21:48:33.514Z",
*     "name": "Festa T",
*     "validUntil": "2015-07-09T03:00:00.000Z",
*     "products": [
*         {
*             "_id": "559574b033d01ee42151be9b",
*             "name": "El Jimador",
*             "price": 23,
*             "quantityAvailable": 10,
*             "categories": [
*                 "drink"
*             ]
*         },
*         {
*             "_id": "559574a133d01ee42151be9a",
*             "name": "Santa Dose",
*             "price": 23,
*             "quantityAvailable": 10,
*             "categories": [
*                 "drink"
*             ]
*         },
*         {
*             "_id": "5595749133d01ee42151be99",
*             "name": "Smirnoff",
*             "price": 70,
*             "quantityAvailable": 10,
*             "categories": [
*                 "drink"
*             ]
*         },
*         {
*             "_id": "5595748833d01ee42151be98",
*             "name": "Belvedere 1l",
*             "price": 130,
*             "quantityAvailable": 10,
*             "categories": [
*                 "drink"
*             ]
*         },
*         {
*             "_id": "5595747e33d01ee42151be97",
*             "name": "Belvedere",
*             "price": 240,
*             "quantityAvailable": 10,
*             "categories": [
*                 "drink"
*             ]
*         }
*     ],
* }
*/

/**
* @api {put} /catalog/ update
* @apiDescription update an catalog
* @apiName update
* @apiGroup Catalog
*
* @apiParam {String}    name                    Catalog Name
* @apiParam {Boolean}   active                  Catalog Status 
* @apiParam {Date}      validUntil              Catalog expire date
* @apiParam {Object[]}  products                Product List
* @apiParam {String}    product.id              Product Id
* @apiParam {String}    product.name            Product Name
* @apiParam {String}    product.decription      Product Descrption
* @apiParam {String[]}  product.categories      Product Categories
* @apiParam {String}    product.quantityAvailable Product Quantity Available
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