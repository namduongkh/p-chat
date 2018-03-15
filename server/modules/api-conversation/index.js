const ConversationController = require('./controllers/conversation.controller');

module.exports = function(app) {
    app.post('/api/conversation/create', ConversationController.create);
};