let users = {};

exports.userLogin = function(user) {
    users[user.socketId] = user;
};

exports.userLogout = function(socketId) {
    delete users[socketId];
};

exports.userList = function(socketId) {
    let list = [];
    for (let i in users) {
        let user = {...users[i] };
        if (socketId == i) {
            user.isYou = true;
        }
        list.push(user);
    }
    return list;
};

exports.userListChange = function(socket) {
    socket.broadcast.emit('user:list-change');
};

exports.room = (app) => {
    return {
        join: function(req, res) {
            req.socket.join(req.data.room);
            res.send('Has joined ' + req.data.room);
        },
        leave: function(req, res) {
            req.socket.leave(req.data.room);
            res.send('Has leaved ' + req.data.room);
        },
        typing: function(req, res) {
            let eventName = req.data.status ? 'message:is-typing' : 'message:stop-typing';
            app.io.in(req.data.conversationId).emit(eventName, {
                userId: req.data.userId,
                userName: req.data.userName
            });
            res.send('Typing');
        },
        seen: function(req, res) {
            app.io.in(req.data.conversationId).emit('message:seen', {
                userId: req.data.userId,
            });
            res.send('Seen');
        }
    }
};