const FriendshipController = require('./controllers/friendship.controller');

module.exports = function(app) {
    app.get('/api/friendship/list', FriendshipController.list);
    app.get('/api/friendship/invitations', FriendshipController.invitations);
    app.post('/api/friendship/invite', FriendshipController.invite);
    app.post('/api/friendship/accept', FriendshipController.accept);
    app.post('/api/friendship/unfriend', FriendshipController.unfriend);
};