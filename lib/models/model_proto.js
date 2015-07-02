(function() {

    var merge_objects = require('../helper/merge_objects.js');
    var mongoose = require('mongoose');
    var bcrypt = require('bcryptjs');
    var hooks = require('hooks')

    function Model(name) {

        this.modelName = name;
        this.modelSchema = false;
        this.pre = {};
    }
    module.exports = Model;

    Model.prototype.build = function(args) {

        //Hooks

        /*
         * CRUD METHODS
         */

        // get: basic
        var getById = function(args, callback) {

            this.findOne({
                '_id': args.id
            }).exec(function(err, data) {

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

        // remove: basic
        var remove = function(args, callback) {

            var baseModel = mongoose.model(this.modelName);
            baseModel.findOneAndRemove({
                _id: args.id
            }, function(err) {
                console.log(err);
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, "Admin deleted: " + args.id);
                }
            });

        }
        remove.method = "DELETE";
        remove.params = ['id'];
        remove.path = this.modelName + "/:id";

        // create: basic
        var create = function(args, callback) {

            var baseModel = mongoose.model(this.modelName);
            var modeInstance = new baseModel(args);

            modeInstance.save(function(err, obj) {
                callback(err, obj);
            });

        }
        create.method = "POST";
        create.params = ['admin: object'];
        create.path = this.modelName;

        //update : basic
        var update = function(args, callback) {

            var baseModel = mongoose.model(this.modelName);

            this.getById(args, function(err, data) {
                var data = merge_objects(data, args);
                data.save(callback);
            });

        }
        update.method = "PUT";
        update.params = ['id', 'Object'];
        update.path = this.modelName;

        //list : basic
        var list = function(args, callback) {

            var baseModel = mongoose.model(this.modelName);

            baseModel.find()
                .skip(args.skip || 0)
                .limit(args.limit || 10)
                .sort(args.sort || '-updated_at')
                .select('-password')
                .exec(function(err, data) {
                    if (err) {
                        callback(err, null);
                    } else {
                        callback(null, data);
                    }
                });
        }
        list.method = "GET";
        list.params = ['skip', 'limit'];
        list.path = this.modelName;

        // add crud methods
        if (!this.modelSchema.statics["getById"])
            this.modelSchema.statics["getById"] = getById;

        if (!this.modelSchema.statics["create"])
            this.modelSchema.statics["create"] = create;

        if (!this.modelSchema.statics["remove"])
            this.modelSchema.statics["remove"] = remove;

        if (!this.modelSchema.statics["upd"])
            this.modelSchema.statics["upd"] = update;

        if (!this.modelSchema.statics["list"])
            this.modelSchema.statics["list"] = list;

        // add create and update date
        this.modelSchema.add({
            created_at: Date,
            updated_at: Date
        });

        // virtual id
        this.modelSchema.virtual('id').get(function() {
            return this._id.toHexString();
        });

        // ensure virtual fields are serialised.
        this.modelSchema.set('toJSON', {
            virtuals: true
        });

        // pre save
        this.modelSchema.pre('save', function(next) {
            now = new Date();

            this.updated_at = now;

            if (!this.created_at) {
                this.created_at = now;
            }
            next();
        });

        // update the model with user data
        args = args || {};
        args.staticMethods = args.staticMethods || [];
        args.schemaMethods = args.schemaMethods || [];

        // add new methods to the Instance or update the existent one
        for (var i = args.schemaMethods.length - 1; i >= 0; i--) {
            var sMethod = args.schemaMethods[i];
            this.modelSchema.methods[sMethod.name] = sMethod;
        };

        // add new methods to the Model or update the existent one
        for (var i = args.staticMethods.length - 1; i >= 0; i--) {
            var sMethod = args.staticMethods[i];
            this.modelSchema.statics[sMethod.name] = sMethod;
        };

        // extends the original schema
        if (args.schemaExtenssion)
            this.modelSchema.add(args.schemaExtenssion);

        var mModel = mongoose.model(this.modelName, this.modelSchema);

        // Add hooks' methods: `hook`, `pre`, and `post`
        // for (var k in hooks) {
        //     mModel[k] = hooks[k];

        // };

        // mModel.hook('create', mModel.prototype.create);

        return mModel;
    }

})();
