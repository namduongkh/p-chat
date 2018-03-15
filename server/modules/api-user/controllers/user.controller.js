const mongoose = require('mongoose');
const User = mongoose.model('User');

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
            User.findOne({ _id: myId })
                .lean()
                .then(user => {
                    req.pre.user = {...user, isYou: true }
                    next();
                });
        } else {
            next();
        }
    },
    function(req, res) {
        let { myId } = req.query;
        let options = {};
        if (myId && myId != 'undefined') {
            options._id = { $ne: myId };
        }
        User.find(options)
            .lean()
            .then(users => {
                if (req.pre.user) {
                    users.unshift(req.pre.user)
                }
                res.json(users);
            });
    }
];