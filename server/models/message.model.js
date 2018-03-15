'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MessageSchema = new Schema({
    conversation: {
        type: Schema.ObjectId,
        ref: 'Conversation'
    },
    from: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    content: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Message', MessageSchema);