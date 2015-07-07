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
      email: { type: String, trim: true, index: true, unique: true, sparse: true },
      username: { type: String, index: true, unique: true },
      role: String,
      name: String,
      password: String,
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
      
      if (!this.username && !this.email)
        throw 'User needs a username or email to access the system';
      
      if (!this.username) {
        this.username = this.email;
      }
      
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
    * @apiParam {string} username
    * @apiParam {string} password
    *
    * @apiSuccess {Object} User
    * @apiError Invalid password or email
    */
    var login = function (args, callback) {
      
      this.findOne({
        'username': args.username
      })
      .exec(function (err, user) {
        
        if (err) {
          callback(err, null);
        }
        else if (!user || !user.validPassword(args.password)) {
          callback("Invalid username or password ", null);
        }
        else {
          delete user['password'];
          callback(null, user);
        }

      });
    };
    login.method = "POST";
    this.modelSchema.statics.login = login;
    
    
    /**
    * @apiIgnore Not ready
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
    
    
    
    /**OVERRIDES *****************************************/
    
    //Override List
     var list_override = function (args, callback) {
      
      args.filter = {};
      
      //filter by name
      if (args.name) {
        args.filter.name = new RegExp('^.*' + args.name + '.*$', "i");
      }
      
      //filter by username
      if (args.username) {
        args.filter.username = new RegExp('^.*' + args.username + '.*$', "i");
      }
      
      // filter by role
      if (args.role) {
        args.filter.role = args.role;
      }
      
      // filter by active
      if (args.active) {
        args.filter.active = args.active;
      }
      
      return this.list(args, callback);
    };
    
    list_override.method = "GET";
    list_override.params = ['skip', 'limit'];
    list_override.path = this.modelName;
    this.modelSchema.statics.list_override = list_override;

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
* @apiParam {String}  name            User full name
* @apiParam {String}  [email]           User email
* @apiParam {String}  [username=email]  Username, to login, fill this field with email if not passed
* @apiParam {String}  password          Password
* @apiParam {String="WAITER","CASHIER","ADMIN","PRODUCER"}  role Role
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
* @apiSuccess {String}  name              User full name
* @apiSuccess {String}  [email]           User email
* @apiSuccess {String}  [username=email]  Username, to login
* @apiError 400 User not found
* 
* @apiSuccessExample {json} Success-Response:
*   {
*       "_id": "559a86c0dc6ecd4c126aff87",
*       "created_at": "2015-07-06T13:46:40.584Z",
*       "updated_at": "2015-07-06T13:46:40.584Z",
*       "name": "cashier",
*       "role": "CASHIER",
*       "username": "cashier",
*       "__v": 0,
*       "active": true,
*       "id": "559a86c0dc6ecd4c126aff87"
*   }
*/

/**
* @api {put} /user/ update
* @apiDescription update an user
* @apiName update
* @apiGroup User
*
* @apiParam {String}  name              User full name
* @apiParam {String}  [email]           User email
* @apiParam {String}  [username=email]  Username, to login, fill this field with email if not passed
* @apiParam {String="WAITER","CASHIER","ADMIN","PRODUCER"}  role Role
*
* @apiSuccess User
* @apiError 400 User not found
* 
* @apiSuccessExample {json} Success-Response:
*   {
*       "_id": "559a86c0dc6ecd4c126aff87",
*       "created_at": "2015-07-06T13:46:40.584Z",
*       "updated_at": "2015-07-06T13:46:40.584Z",
*       "name": "cashier",
*       "role": "CASHIER",
*       "username": "cashier",
*       "__v": 0,
*       "active": true,
*       "id": "559a86c0dc6ecd4c126aff87"
*   }
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
* @api {get} /user/?limit&skip&name&username&email&active&role list
* @apiDescription list all users
* @apiName list
* @apiGroup User
*
*
* @apiSuccess 200 Success
* @apiError 400 User not found
* 
* @apiSuccessExample {json} Success-Response:
*     [
*        {
*            "_id": "559a86c0dc6ecd4c126aff87",
*            "created_at": "2015-07-06T13:46:40.584Z",
*            "updated_at": "2015-07-06T13:46:40.584Z",
*            "name": "cashier",
*            "role": "CASHIER",
*            "username": "cashier",
*            "__v": 0,
*            "active": true,
*            "id": "559a86c0dc6ecd4c126aff87"
*        },
*        {
*            "_id": "559a860adc6ecd4c126aff84",
*            "created_at": "2015-07-06T13:43:38.567Z",
*            "updated_at": "2015-07-06T13:43:38.567Z",
*            "name": "Admin",
*            "role": "ADMIN",
*            "username": "admin",
*            "__v": 0,
*            "active": true,
*            "id": "559a860adc6ecd4c126aff84"
*        }
*     ]
*     
*/
