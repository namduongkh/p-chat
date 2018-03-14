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
}