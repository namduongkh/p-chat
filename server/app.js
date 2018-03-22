global.BASE_PATH = __dirname;

const app = require('express')();

app.configManager = require('kea-config');
app.configManager.setup('./config');

const port = app.configManager.get('port');
const server = require('http').Server(app);

app.io = require('socket.io')(server);

require('./lib/bootstrap')(app);

server.listen(port, function() {
    console.log('Server đang chạy cổng: %d', port);
});