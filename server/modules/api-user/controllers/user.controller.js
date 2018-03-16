const mongoose = require('mongoose');
const _ = require('lodash');
const User = mongoose.model('User');
const Friendship = mongoose.model('Friendship');

exports.login = function(req, res) {
    let { name } = req.body;
    User.findOne({ name: name })
        .lean()
        .then(user => {
            if (!user) {
                user = new User({ name: name });
                user.save();
            }
            res.json(user);
        });
};

exports.userList = [
    function(req, res, next) {
        let { myId } = req.query;
        if (myId && myId != 'undefined') {
            Friendship.find({
                    $or: [{
                        from: myId
                    }, {
                        to: myId
                    }],
                    type: 'accepted'
                })
                .sort('-created')
                .populate({
                    path: 'users',
                    select: 'name',
                    match: {
                        _id: { $ne: myId }
                    }
                })
                .lean()
                .then(friendships => {
                    let friends = [myId];
                    _.each(friendships, friendship => {
                        // console.log(friendship);
                        friends.push(friendship.users[0]._id);
                    });
                    req.pre.friends = friends;
                    next();
                });
        } else {
            next();
        }
    },
    function(req, res) {
        let { myId } = req.query;
        let options = {};
        // if (myId && myId != 'undefined') {
        //     options._id = { $ne: myId };
        // }
        if (req.pre.friends && req.pre.friends.length) {
            options._id = { $nin: req.pre.friends };
        }
        User.find(options)
            .lean()
            .then(users => {
                res.json(users);
            });
    }
];