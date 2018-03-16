const ConversationController = require('./controllers/conversation.controller');

module.exports = function(app) {
    app.post('/api/conversation/create', ConversationController.create);
    app.post('/api/conversation/detail', ConversationController.detail);
    app.get('/api/conversation/list', ConversationController.list);
};