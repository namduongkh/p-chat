const express = require('express');
const path = require('path');
const glob = require('glob');
const _ = require('lodash');

module.exports = function(app) {

    // Kết nối mongoDB
    require('./mongo');

    require('./middleware')(app);

    // Nạp các model
    _.each(glob.sync(BASE_PATH + '/models/*.model.js'), (file) => {
        require(file);
    });

    // Nạp các modules
    _.each(glob.sync(BASE_PATH + '/modules/*/index.js'), (file) => {
        require(file)(app);
    });

    // Cấu hình các đường dẫn tĩnh
    app.use(express.static(path.join(BASE_PATH, 'public')));

};