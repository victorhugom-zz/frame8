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

    /**OVERRIDES *****************************************/

    //Override List
    var list_override = function (args, callback) {

      //filter by name
      if(args.name){
        var query = this.find({name : new RegExp('^.*'+args.name+'.*$', "i")});
      }else {
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
* @api {get} /catalog/?limit&skip&name list
* @apiDescription list all catalogs
* @apiName list
* @apiGroup Catalog
*
*
* @apiSuccess 200 Success
* @apiError 400 Catalog not found
*/
