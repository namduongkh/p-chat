global.BASE_PATH = __dirname;

const app = require('express.oi')();
const port = process.env.PORT || 8888;

const server = app.http().io();

app.io.session({
    secret: 'express.oi makes me happy',
    resave: false,
    saveUninitialized: true
});

require('./lib/bootstrap')(app);

server.listen(port, function() {
    console.log('Server listening at port %d', port);
});