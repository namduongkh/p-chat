const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.login = function(req, res) {
    let { name } = req.payload;
    console.log("name", name);
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