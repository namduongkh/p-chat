const mongoose = require('mongoose');
const Conversation = mongoose.model('Conversation');
const Message = mongoose.model('Message');
const _ = require('lodash');

exports.list = function(req, res) {
    let { conversationId } = req.query;
    let options = {};
    if (conversationId && conversationId != 'undefined') {
        options.conversation = conversationId;
    }
    Message.find(options)
        .sort("-created")
        .limit(20)
        .populate('from', 'name')
        .lean()
        .then(messages => {
            res.json(_.reverse(messages));
        });
};

exports.new = function(app) {
    return function(req, res) {
        new Message(req.body)
            .save()
            .then(message => {
                return Message.findOne({ _id: message._id })
                    .lean()
                    .populate('from', 'name')
            })
            .then(message => {
                app.io.to(message.conversation).emit('message:new', message);
                // console.log('socket', req.socket, req.io);
                res.json(message);
            });
    };
};