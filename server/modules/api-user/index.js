const UserController = require('./controllers/user.controller');

module.exports = function(app) {
    app.post('/api/login', UserController.login);
    app.get('/api/hello', function(req, res) {
        console.log('hello');
        res.send('hello!');
    });
};