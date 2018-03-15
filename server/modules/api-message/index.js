const MessageController = require('./controllers/message.controller');

module.exports = function(app) {
    app.get('/api/message/list', MessageController.list);
    app.post('/api/message/new', MessageController.new(app));
};