(function () {
    
    // load the things we need
    var model = require('./model_proto');
    var inherits = require('util')
        .inherits;
    
    var mongoose = require('mongoose');
    var bcrypt = require('bcryptjs');
    
    
    function admin() {
        
        model.call(this);
        
        // define the model name
        this.modelName = "Admin";
        
        // define the schema for our model
        this.modelSchema = mongoose.Schema({
            email: {
                type: String,
                unique: true,
                required: true
            },
            name: String,
            password: {
                type: String,
                required: true
            },
        });
        
        /*
         * functions
         */
        
        /**
         * before save the model encrypt the password
         */
        this.modelSchema.pre('save', function (next) {
            if (!this.password)
                throw 'Invalid Password';
            
            if (this.modifiedPaths().some(function (elem) { return elem == "password"; })) {
                this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8), null);
            }
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
        * @api {post} /admin/login login
        * @apiDescription do login
        * @apiName login
        * @apiGroup Admin
        *
        * @apiParam {string} email
        * @apiParam {string} password
        *  
        * @apiSuccess {Object} Admin
        * @apiError Invalid password or email
        */
        var login = function (args, callback) {
            
            this.findOne({
                'email': args.email
            })
            .exec(function (err, admin) {
                
                if (err)
                    callback(err, null);
                else if (!admin || !admin.validPassword(args.password))
                    callback("Invalid password or email ", null);
                else {
                    delete admin['password'];
                    callback(null, admin);
                }

            });
        };
        login.method = "POST";
        this.modelSchema.statics.login = login;
        
        
        /** 
        * @api {get} /admin/email/:email get by email
        * @apiDescription get user by his email
        * @apiName getByEmail
        * @apiGroup Admin
        *
        * @apiParam {String} email
        *  
        * @apiSuccess {Object} Admin
        * @apiError Admin not found
        */
        var getByEmail = function (args, callback) {
            this.findOne({
                'email': args.email
            })
            .select('-password')
            .exec(function (err, admin) {
                
                if (err)
                    callback(err, null);
                else if (!admin)
                    callback("Admin not found", null)
                else
                    callback(null, admin)
            });
        }
        getByEmail.method = "GET";
        getByEmail.params = ['email'];
        getByEmail.path = "admin/email/:email";
        this.modelSchema.statics.getByEmail = getByEmail;

    }
    
    // inherits
    inherits(admin, model);
    
    // exports
    module.exports = exports = new admin();

})();

/** 
* @api {post} /admin/ create
* @apiDescription create an admin
* @apiName create
* @apiGroup Admin
*
* @apiParam {String} name
* @apiParam {String} email
* @apiParam {String} password
*  
* @apiSuccess 200 Success
* @apiError 400
*/

/** 
* @api {get} /admin/:id get
* @apiDescription get an admin
* @apiName getById
* @apiGroup Admin
*
* @apiParam {String} id
*  
* @apiSuccess Admin
* @apiError 400 Admin not found
*/

/** 
* @api {put} /admin/ update
* @apiDescription update an admin
* @apiName update
* @apiGroup Admin
*
* @apiParam {String} id
* @apiParam {String} email
* @apiParam {String} name
* @apiParam {String} password 
*  
* @apiSuccess Admin
* @apiError 400 Admin not found
*/

/** 
* @api {delete} /admin/:id remove
* @apiDescription remove an admin
* @apiName remove
* @apiGroup Admin
*
* @apiParam {String} id
*  
* @apiSuccess 200 Success
* @apiError 400 Admin not found
*/

/**
* @api {get} /admin/?limit&skip list
* @apiDescription list all admins
* @apiName list
* @apiGroup Admin
*
*  
* @apiSuccess 200 Success
* @apiError 400 Admin not found
*/