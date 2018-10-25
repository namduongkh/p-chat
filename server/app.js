global.BASE_PATH = __dirname;

import express from "express";
import http from "http";

const app = express();

app.configManager = require('kea-config');
app.configManager.setup('./config');

const port = app.configManager.get('port');
const server = http.Server(app);

app.io = require('socket.io')(server);

require('./lib/bootstrap')(app);

server.listen(port, function () {
    console.log('Server đang chạy port: %d', port);
});