global.BASE_PATH = __dirname;

const app = require('./lib/socket-express')();
// const app = require('express')();
app.configManager = require('kea-config');
app.configManager.setup('./config');

const port = app.configManager.get('port');

// const server = require('http').Server(app);
// const io = require('socket.io')(server);

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