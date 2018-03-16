'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FriendshipSchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    from: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    to: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    type: {
        type: String,
        enum: ['inviting', 'accepted']
    },
    created: {
        type: Date,
        default: Date.now
    },
    modified: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Friendship', FriendshipSchema);