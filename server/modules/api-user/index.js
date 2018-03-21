const UserController = require('./controllers/user.controller');

module.exports = function(app) {
    app.post('/api/user/login', UserController.login);
    app.post('/api/user/register', UserController.register);
    app.post('/api/user/update', UserController.update);
    app.get('/api/user/list', ...UserController.userList);
    app.get('/api/user/info', UserController.info)
};