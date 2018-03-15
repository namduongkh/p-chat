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

exports.room = {
    join: function(req, res) {
        req.socket.join(req.data.room);
        res.send('Has joined ' + req.data.room);
    },
    leave: function(req, res) {
        req.socket.leave(req.data.room);
        res.send('Has leaved ' + req.data.room);
    },
};