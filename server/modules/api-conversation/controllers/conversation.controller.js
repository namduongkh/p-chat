const mongoose = require('mongoose');
const Conversation = mongoose.model('Conversation');

exports.create = function(req, res) {
    let { users } = req.payload;
};