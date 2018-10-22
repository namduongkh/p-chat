const mongoose = require('mongoose');

module.exports = function (app) {
    mongoose.connect(app.configManager.get('db.uri'), {
        useNewUrlParser: true
    });
    mongoose.Promise = require('bluebird');
    require('mongoose-pagination');
    console.log('Kết nối MongoDB');
};