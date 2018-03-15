'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('User', UserSchema);