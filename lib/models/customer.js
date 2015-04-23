(function () {
    
    // load the things we need
    var model = require('./model_proto');
    var inherits = require('util')
        .inherits;
    
    var mongoose = require('mongoose');
    var bcrypt = require('bcryptjs');
    
    function customer() {
        
        model.call(this);
        
        this.modelName = "Customer";
        
        // define the schema for our customer model
        this.modelSchema = mongoose.Schema({
            creditCards: [{
                    billingAddress: {
                        address: String,
                        city: String,
                        country: String,
                        postalCode: String,
                        state: String
                    },
                    cardNumber: String,
                    expirationMonth: Number,
                    expitationYear: Number,
                    name: String,
                    securityCode: Number
                }],
            email: String,
            name: String,
            password: String,
            phoneNumber: String,
            shippingAddresses: [{
                    address: String,
                    city: String,
                    country: String,
                    name: String,
                    postalCode: String,
                    state: String
                }]
        });
        
        
        /*
         * functions
         */
        var encrypt = function (value) {
            return bcrypt.hashSync(value, bcrypt.genSaltSync(8), null);
        };
        
        /**
         * before save the model encrypt the password
         */
        this.modelSchema.pre('save', function (next) {
            if (!this.password)
                throw 'Invalid Password';
            
            if (this.modifiedPaths().some(function (elem) { return elem == "password"; }))
                this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8), null);
            
            next();
        });
        
        /*
         * schema methods
         * methods that we use only in the model instance
         */

        // checking if password is valid
        this.modelSchema.methods.validPassword = function (password) {
            return bcrypt.compareSync(password, this.password);
        };
        
        /**
         * static methods
         */

               
        /** 
        * @api {post} /customer/login login
        * @apiDescription do login
        * @apiName login
        * @apiGroup Customer
        *
        * @apiParam {string} email
        * @apiParam {string} password
        *  
        * @apiSuccess {Object} Customer
        * @apiError Invalid password or email
        */
        var login = function (args, callback) {
            
            this.findOne({
                'email': args.email
            })
            .exec(function (err, customer) {
                
                if (err)
                    callback(err, null);
                else if (!customer || !customer.validPassword(args.password))
                    callback("Invalid password or email", null);
                else {
                    delete customer['password'];
                    callback(null, customer);
                }

            });
        };
        login.method = "POST";
        this.modelSchema.statics.login = login;
        
        
        /** 
        * @api {get} /customer/email/:email get by email
        * @apiDescription get user by his email
        * @apiName getByEmail
        * @apiGroup Customer
        *
        * @apiParam {String} email
        *  
        * @apiSuccess {Object} Customer
        * @apiError Customer not found
        */
        var getByEmail = function (args, callback) {
            this.findOne({
                'email': args.email
            })
            .select('-password')
            .exec(function (err, customer) {
                
                if (err)
                    callback(err, null);
                else if (!customer)
                    callback("Customer not found", null)
                else
                    callback(null, customer)
            });
        }
        getByEmail.method = "GET";
        getByEmail.params = ['email'];
        getByEmail.path = "customer/email/:email";
        this.modelSchema.statics.getByEmail = getByEmail;
        
        /** 
        * @api {post} /customer/updatepassword/ update password
        * @apiDescription update password
        * @apiName updatePassword
        * @apiGroup Customer
        *
        * @apiParam {String} id
        * @apiParam {Number} password
        *  
        * @apiSuccess Success
        * @apiError Customer not found
        */
        var updatePassword = function (args, callback) {
            var args = { password: args.password, id: args.id };
            this.upd(args, callback);
        };
        updatePassword.method = "POST";
        this.modelSchema.statics.updatePassword = updatePassword;
        
        /** 
        * @api {post} /customer/addcard add card
        * @apiDescription add a card to te customer account
        * @apiName addCard
        * @apiGroup Customer
        *
        * @apiParam {String} id
        * @apiParam {String} cardNumber
        * @apiParam {String} expirationMonth
        * @apiParam {String} expirationYear
        * @apiParam {String} name
        * @apiParam {String} securityCode
        * @apiParam {Object} billingAddress
        * @apiParam {String} billingAddress.address
        * @apiParam {String} billingAddress.city
        * @apiParam {String} billingAddress.country
        * @apiParam {String} billingAddress.state
        * @apiParam {String} billingAddress.postalCode
        *  
        * @apiSuccess 200 Success
        * @apiError 400
        */
        var addCard = function (args, callback) {

            this.getById(args, function (err, data) {
                
                delete args.id;
                data.creditCards.push(args);
                data.save(callback);
            });
        }
        addCard.method = "POST";
        this.modelSchema.statics.addCard = addCard;

        /** 
        * @api {post} /customer/addshippingaddress add shipping address
        * @apiDescription add a Shipping Address to te customer account
        * @apiName addShippingAddress
        * @apiGroup Customer
        *
        * @apiParam {String} id
        * @apiParam {String} name
        * @apiParam {String} address
        * @apiParam {String} city
        * @apiParam {String} country
        * @apiParam {String} state
        * @apiParam {String} postalCode
        *  
        * @apiSuccess 200 Success
        * @apiError 400
        */
        var addShippingAddress = function (args, callback) {
            
            this.getById(args, function (err, data) {
                
                delete args.id;
                data.shippingAddresses.push(args);
                data.save(callback);
            });
        }
        addShippingAddress.method = "POST";
        this.modelSchema.statics.addShippingAddress = addShippingAddress;
    }
    
    
    // inherits
    inherits(customer, model);
    
    // exports
    module.exports = exports = new customer();

})();


/** 
* @api {post} /customer/ create
* @apiDescription create an customer
* @apiName create
* @apiGroup Customer
*
* @apiParam {String} name
* @apiParam {String} email
* @apiParam {String} password
*  
* @apiSuccess 200 Success
* @apiError 400
*/

/** 
* @api {get} /customer/:id get
* @apiDescription get an customer
* @apiName getById
* @apiGroup Customer
*
* @apiParam {String} id
*  
* @apiSuccess Customer
* @apiError 400 Customer not found
*/

/** 
* @api {put} /customer/ update
* @apiDescription update an customer
* @apiName update
* @apiGroup Customer
*
* @apiParam {String} id
* @apiParam {String} email
* @apiParam {String} name
* @apiParam {String} password 
*  
* @apiSuccess Customer
* @apiError 400 Customer not found
*/

/** 
* @api {delete} /customer/:id remove
* @apiDescription remove an customer
* @apiName remove
* @apiGroup Customer
*
* @apiParam {String} id
*  
* @apiSuccess 200 Success
* @apiError 400 Customer not found
*/

/**
* @api {get} /customer/?limit&skip list
* @apiDescription list all customers
* @apiName list
* @apiGroup Customer
*
*  
* @apiSuccess 200 Success
* @apiError 400 Customer not found
*/

