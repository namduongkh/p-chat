global.BASE_PATH = __dirname;

const app = require('express.oi')();
app.configManager = require('kea-config');
app.configManager.setup('./config');

const port = app.configManager.get('port');
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