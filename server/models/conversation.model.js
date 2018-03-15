'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ConversationSchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'User'
    }]
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Conversation', ConversationSchema);