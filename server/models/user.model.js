'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt');

const SALT_LENGTH = 9;

var UserSchema = new Schema({
    name: {
        type: String
    },
    username: {
        type: String,
        required: 'Username là bắt buộc',
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: 'Password là bắt buộc',
        trim: true
    },
    avatar: {
        type: String
    },
    cover: {
        type: String
    },
    birthday: {
        type: Date
    },
    gender: {
        type: Number,
    },
    bio: {
        type: String,
        default: 'Hello everyone!'
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

UserSchema.methods = {
    hashPassword: function(password, callback) {
        bcrypt.hash(password, SALT_LENGTH, callback);
    },
    authenticate: function(password, callback) {
        bcrypt.compare(password, this.password, callback);
    }
}

module.exports = mongoose.model('User', UserSchema);