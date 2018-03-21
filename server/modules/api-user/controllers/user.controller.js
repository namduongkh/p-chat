const mongoose = require('mongoose');
const _ = require('lodash');
const User = mongoose.model('User');
const Friendship = mongoose.model('Friendship');

exports.login = function(req, res) {
    let { username, password } = req.body;
    User.findOne({ username: username })
        .then(user => {
            if (user) {
                user.authenticate(password, function(err, result) {
                    if (result) {
                        user.password = 'hash';
                        return res.json({ status: true, data: user });
                    } else {
                        return res.json({ status: false, message: 'Password không chính xác!' });
                    }
                });
            } else {
                return res.json({ status: false, message: 'Không tồn tại tài khoản!' });
            }
            // if (!user) {
            //     user = new User({ name: name });
            //     user.save();
            // }
            // res.json(user);
        });
};

exports.register = function(req, res) {
    let { name, username, password } = req.body;
    User.findOne({
            username: username
        })
        .lean()
        .then(user => {
            if (user) {
                return res.json({
                    status: false,
                    message: 'Username đã tồn tại'
                });
            } else {
                user = new User(req.body);
                user.hashPassword(password, function(err, hash) {
                    user.password = hash;
                    user.save().then(user => {
                        user.password = 'hash';
                        res.json({ status: true, data: user });
                    });
                });
            }
        });
};

exports.update = function(req, res) {
    let { _id } = req.body;
    User.findOne({
            _id: _id
        })
        .then(user => {
            if (user) {
                user = _.extend(user, req.body);
                user.save().then(user => {
                    user.password = 'hash';
                    return res.json({ status: true, data: user });
                });
            } else {
                return res.json({
                    status: false,
                    message: 'Không tồn tại người dùng!'
                });
            }
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