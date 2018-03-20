const mongoose = require('mongoose');
const Conversation = mongoose.model('Conversation');
const Message = mongoose.model('Message');
const _ = require('lodash');
const cron = require('cron');
const moment = require('moment');

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
                Conversation.findOne({
                        _id: message.conversation
                    })
                    .then(conv => {
                        conv.modified = new Date();
                        conv.enable[message.from] = true;
                        conv.save();
                    });
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

exports.removeMessageJob = function(app) {
    let expireSecond = app.configManager.get('messageExpireSecond');
    new cron.CronJob({
        cronTime: `*/5 * * * * *`,
        onTick: function() {
            // console.log('-- Đã trôi qua: ' + expireSecond + ' giây!')
            Message.find({
                    created: { $lte: moment().subtract(expireSecond, 's').toDate() }
                })
                .then(messages => {
                    let conversationMessages = {};
                    _.each(messages, (message) => {
                        // console.log("Message", moment(message.created).format('DD/MM/YYYY HH:mm:ss'));
                        if (!conversationMessages[message.conversation]) {
                            conversationMessages[message.conversation] = [];
                        }
                        conversationMessages[message.conversation].push(message._id);
                        message.remove();
                    });
                    _.forIn(conversationMessages, (item, key) => {
                        app.io.in(key).emit('message:remove', item);
                    });
                });
        },
        start: true
    });
}