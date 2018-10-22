import express from 'express';
import path from 'path';
import glob from 'glob';
import _ from 'lodash';
import Path from 'path';
import expressNunjucks from 'express-nunjucks';

module.exports = function (app) {
    // Kết nối mongoDB
    require('./mongo')(app);

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

    const isDev = app.get('env') === 'development';
    app.set('views', Path.resolve(__dirname, '../templates'));
    const njk = expressNunjucks(app, {
        watch: isDev,
        noCache: isDev
    });
};