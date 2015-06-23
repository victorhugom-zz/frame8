(function () {
    
    // load the things we need
    var model = require('./model_proto');
    var inherits = require('util')
        .inherits;
    
    var mongoose = require('mongoose');
    var ObjectId = mongoose.Schema.Types.ObjectId;
    
    
    function cart() {
        
        model.call(this);
        
        this.modelName = "Cart";
        
        // define the schema for our customer model
        this.modelSchema = mongoose.Schema({
            date: Date,
            customer: {
                type: ObjectId,
                ref: 'Customer'
            },
            products: [{
                    product: { type: ObjectId, ref: 'Product' }, 
                    catalog: { type: ObjectId, ref: 'Catalog' },
                    quantity : Number,
                    price : Number
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
         * methods that we use to manipulate all Carts
         */


        /**OVERRIDES *****************************************/
        //Override List
        var list = function (args, callback) {
            var a = 1;
            this.find()
                .skip(args.skip || 0)
                .limit(args.limit || 10)
                .sort('-updated_at')
                .populate('products.product')
                .exec(function (err, data) {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, data);
                }
            });
        }
        list.method = "GET";
        list.path = "cart";
        this.modelSchema.statics.list = list;
        
        
        // create: basic
        var create = function (args, callback) {
            
            var Product = mongoose.model("Product");
            var Catalog = mongoose.model("Catalog");
            
            var cart = { "customer" : args.customer , products : [], total : 0 };
            args.products.map(function (element, index, array) {
                
                Catalog.findOne({ "_id": element.catalog })
                .exec(function (err, data) {
                    
                    if (err)
                        callback(err, null);
                    
                    var product = data.products.filter(function (product) {
                        return product.id == element.product;
                    });
                    
                    if (!product)
                        callback("product not found: " + element.product, null);
                    
                    cart.products.push({
                        catalog: element.catalog, 
                        product: element.product,
                        quantity : element.quantity || 1,
                        price : product[0].price
                    });
                    
                    if (index == array.length - 1 && cart.products.length == array.length) {
                        var baseModel = mongoose.model("Cart");
                        var modeInstance = new baseModel(cart);
                        
                        modeInstance.save(function (err, obj) {
                            callback(err, obj);
                        });
                    }
                });
            
            });
        }
        create.method = "POST";
        create.path = this.modelName;
        this.modelSchema.statics.create = create;
        
        // get by id
        var getById = function (args, callback) {
            
            this.findOne({
                '_id': args.id
            }).populate("products.product")
            .populate("products.catalog")
            .exec(function (err, data) {
                
                if (err)
                    callback(err, null);
                else if (!data)
                    callback(this.modelName + " not found", null);
                else
                    callback(null, data);
            });
        }
        getById.method = "GET";
        getById.params = ['id'];
        getById.path = this.modelName + "/:id";
        this.modelSchema.statics.getById = getById;

    }
    
    // inherits
    inherits(cart, model);
    
    // exports
    module.exports = exports = new cart();

})();



/** 
* @api {post} /cart/ create
* @apiDescription create an cart
* @apiName create
* @apiGroup Cart
*
* @apiParam {ObjectId} customer
* @apiParam {String[]} products 
*  
* @apiSuccess 200 Success
* @apiError 400
*/

/** 
* @api {get} /cart/:id get
* @apiDescription get an cart
* @apiName getById
* @apiGroup Cart
*
* @apiParam {String} id
*  
* @apiSuccess Cart
* @apiError 400 Cart not found
*/


/** 
* @api {delete} /cart/:id remove
* @apiDescription remove an cart
* @apiName remove
* @apiGroup Cart
*
* @apiParam {String} id
*  
* @apiSuccess 200 Success
* @apiError 400 Cart not found
*/

/**
* @api {get} /cart/?limit&skip list
* @apiDescription list all carts
* @apiName list
* @apiGroup Cart
*
*  
* @apiSuccess 200 Success
* @apiError 400 Cart not found
*/
