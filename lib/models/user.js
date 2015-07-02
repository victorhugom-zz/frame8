(function () {

  // load the things we need
  var model = require('./model_proto');
  var inherits = require('util')
  .inherits;

  var mongoose = require('mongoose');
  var bcrypt = require('bcryptjs');


  function user() {

    model.call(this);

    // define the model name
    this.modelName = "User";

    // define the schema for our model
    this.modelSchema = mongoose.Schema({
      email: {type: String, trim: true, index: true, unique: true, sparse: true},
      role: String,
      name: String,
      password:String,
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
    * @api {post} /user/login login
    * @apiDescription do login
    * @apiName login
    * @apiGroup User
    *
    * @apiParam {string} email
    * @apiParam {string} password
    *
    * @apiSuccess {Object} User
    * @apiError Invalid password or email
    */
    var login = function (args, callback) {

      this.findOne({
        'email': args.email
      })
      .exec(function (err, user) {

        if (err)
        callback(err, null);
        else if (!user || !user.validPassword(args.password))
        callback("Invalid password or email ", null);
        else {
          delete user['password'];
          callback(null, user);
        }

      });
    };
    login.method = "POST";
    this.modelSchema.statics.login = login;


    /**
    * @api {get} /user/email/:email get by email
    * @apiDescription get user by his email
    * @apiName getByEmail
    * @apiGroup User
    *
    * @apiParam {String} email
    *
    * @apiSuccess {Object} User
    * @apiError User not found
    */
    var getByEmail = function (args, callback) {
      this.findOne({
        'email': args.email
      })
      .select('-password')
      .exec(function (err, user) {

        if (err)
        callback(err, null);
        else if (!user)
        callback("User not found", null)
        else
        callback(null, user)
      });
    }
    getByEmail.method = "GET";
    getByEmail.params = ['email'];
    getByEmail.path = "user/email/:email";
    this.modelSchema.statics.getByEmail = getByEmail;

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

      // filter by category
      if(args.role){
        args.filter.role = args.role;
      }

      // filter by category
      if(args.active){
        args.filter.active = args.active;
      }

      return this.list(args, callback);
    };

    search.method = "GET";
    search.params = ['skip', 'limit'];
    search.path = this.modelName;
    this.modelSchema.statics.search = search;

  }

  // inherits
  inherits(user, model);

  // exports
  module.exports = exports = new user();

})();

/**
* @api {post} /user/ create
* @apiDescription create an user
* @apiName create
* @apiGroup User
*
* @apiParam {String} name
* @apiParam {String} email
* @apiParam {String} password
*
* @apiSuccess 200 Success
* @apiError 400
*/

/**
* @api {get} /user/:id get
* @apiDescription get an user
* @apiName getById
* @apiGroup User
*
* @apiParam {String} id
*
* @apiSuccess User
* @apiError 400 User not found
*/

/**
* @api {put} /user/ update
* @apiDescription update an user
* @apiName update
* @apiGroup User
*
* @apiParam {String} id
* @apiParam {String} email
* @apiParam {String} name
* @apiParam {String} password
*
* @apiSuccess User
* @apiError 400 User not found
*/

/**
* @api {delete} /user/:id remove
* @apiDescription remove an user
* @apiName remove
* @apiGroup User
*
* @apiParam {String} id
*
* @apiSuccess 200 Success
* @apiError 400 User not found
*/

/**
* @api {get} /user/?limit&skip list
* @apiDescription list all users
* @apiName list
* @apiGroup User
*
*
* @apiSuccess 200 Success
* @apiError 400 User not found
*/
