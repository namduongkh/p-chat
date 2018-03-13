const express = require('express');
const path = require('path');
const glob = require('glob');
const _ = require('lodash');

module.exports = function(app) {
    _.each(glob.sync(BASE_PATH + '/modules/*/index.js'), (file) => {
        require(file)(app);
    });

    app.use(express.static(path.join(BASE_PATH, 'public')));
};