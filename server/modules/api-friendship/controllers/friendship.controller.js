const mongoose = require('mongoose');
const Friendship = mongoose.model('Friendship');
const _ = require('lodash');

exports.list = function(req, res) {
    let { myId } = req.query;
    let options = {};
    let populateUserMatch = {};
    if (myId && myId != 'undefined') {
        options.users = myId;
        populateUserMatch = { _id: { $ne: myId } };
    }
    Friendship.find(options)
        .sort('-created')
        .populate({
            path: 'users',
            select: 'name bio avatar',
            match: populateUserMatch
        })
        .lean()
        .then(friendships => {
            res.json(friendships);
        });
};

exports.invite = function(req, res) {
    let { myId, friendId } = req.body;
    if (myId && friendId) {
        let users = [myId, friendId];
        Friendship.findOne({
                $or: [{
                    from: myId,
                    to: friendId,
                }, {
                    users: { $length: users.length },
                    users: { $all: users }
                }]
            })
            .lean()
            .then(friendship => {
                if (friendship) {
                    if (friendship.type === 'inviting') {
                        res.json({ status: true, message: 'Đã gửi lời mời kết bạn!' });
                    } else {
                        res.json({ status: true, message: 'Đã trở thành bạn bè của nhau!' });
                    }
                } else {
                    new Friendship({
                            from: myId,
                            to: friendId,
                            type: 'inviting'
                        })
                        .save()
                        .then(() => {
                            res.json({ status: true, message: 'Đã gửi lời mời kết bạn!' });
                        });
                }
            });
    } else {
        res.json({ status: false, message: 'Không thành công!' });
    }
};

exports.accept = function(req, res) {
    let { friendshipId } = req.body;
    if (friendshipId) {
        Friendship.findOne({ _id: friendshipId })
            .then(friendship => {
                friendship.users = [friendship.from, friendship.to];
                friendship.type = 'accepted';
                return friendship.save();
            })
            .then(friendship => {
                res.json({ status: true, message: 'Đã trở thành bạn bè của nhau!' });
            });
    } else {
        res.json({ status: false, message: 'Không có lời mời kết bạn từ người này!' });
    }
};

exports.unfriend = function(req, res) {
    let { friendshipId } = req.body;
    if (friendshipId) {
        Friendship.findByIdAndRemove(friendshipId, function() {
            res.json({ status: true, message: 'Đã hủy kết bạn!' });
        });
    } else {
        res.json({ status: false, message: 'Chưa là bạn của nhau!' });
    }
};

exports.invitations = function(req, res) {
    let { myId } = req.query;
    if (myId && myId != 'undefined') {
        Friendship.find({
                to: myId,
                type: 'inviting'
            })
            .select('from')
            .populate('from', 'name bio avatar')
            .lean()
            .then(invitations => {
                res.json((invitations || []));
            });
    } else {
        res.json([]);
    }
};