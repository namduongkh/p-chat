const UserController = require('./controllers/user.controller');

module.exports = function(app) {
    app.post('/api/user/login', UserController.login);
    app.get('/api/user/list', ...UserController.userList);
};