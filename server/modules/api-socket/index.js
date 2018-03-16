const SocketController = require('./controllers/socket.controller');

module.exports = function(app) {

    app.io.on('connection', function(socket) {
        console.log('Client Connected:', socket.id);

        socket.on('disconnect', function() {
            console.log('-- Client Disconnected:', socket.id);
            SocketController.userLogout(socket.id);
            SocketController.userListChange(socket);
        });
    });

    app.io.route('user', {
        login: function(req, res) {
            let user = {
                ...req.data
            }
            user.socketId = req.socket.id;
            SocketController.userLogin(user);
            SocketController.userListChange(req.socket);
            res.json(user);
        },
        list: function(req, res) {
            res.json(SocketController.userList(req.socket.id));
        }
    });

    app.io.route('room', SocketController.room(app));
};