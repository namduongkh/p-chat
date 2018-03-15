global.BASE_PATH = __dirname;
global.configManager = require('kea-config');
configManager.setup('./config');

const app = require('express.oi')();
const port = configManager.get('port');

const server = app.http().io();

app.io.session({
    secret: 'express.oi makes me happy',
    resave: false,
    saveUninitialized: true
});

require('./lib/bootstrap')(app);

server.listen(port, function() {
    console.log('Server đang chạy cổng: %d', port);
});