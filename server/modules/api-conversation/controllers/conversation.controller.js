const mongoose = require('mongoose');
const Conversation = mongoose.model('Conversation');
const _ = require('lodash');

exports.create = function(req, res) {
    let { users } = req.body;
    if (users && users.length) {
        Conversation.findOne({
                users: { $length: users.$length },
                users: { $in: users }
            })
            .lean()
            .then(conv => {
                if (conv) {
                    console.log('Đã tồn tại cuộc hội thoại');
                    res.json(conv);
                } else {
                    console.log('Chưa tồn tại cuộc hội thoại');
                    new Conversation({ users }).save().then(conv => {
                        res.json(conv);
                    });
                }
            });
    }
};

exports.detail = function(req, res) {
    let { conversationId, myId } = req.body;
    if (conversationId) {
        Conversation.findOne({
                _id: conversationId
            })
            .lean()
            .populate('users')
            .then(conv => {
                if (conv) {
                    if (myId) {
                        conv.users = _.remove(conv.users, user => {
                            return user._id != myId;
                        });
                    }
                    res.json(conv);
                } else {
                    res.send('Không tồn tại cuộc hội thoại!');
                }
            });
    }
};

exports.list = function(req, res) {
    let { myId } = req.query;
    if (myId && myId != 'undefined') {
        Conversation.find({
                users: myId
            })
            .sort('-modified -created')
            .lean()
            .populate('users')
            .then(convs => {
                convs = _.map(convs, conv => {
                    conv.users = _.remove(conv.users, item => {
                        return item._id != myId;
                    });
                    return conv;
                });
                res.json(convs);
            });
    } else {
        res.json([]);
    }
};