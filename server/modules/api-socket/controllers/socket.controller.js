module.exports = function(io, socket) {

    socket.on('joinRoom', function(data) {
        // console.log('joinRoom', data);
        // setInterval(function() {
        //     console.log('hello', data)
        //     socket.in(data.room).emit('new-message', 'Hello');
        // }, 1000);
        socket.join(data.room);
        io.in(data.room).emit('new-message', { from: 'system', msg: socket.id + ' has joined!' });
    });

    socket.on('send-message', function(data) {
        io.in(data.room).emit('new-message', data.data);
    });

    socket.on('leaveRoom', function(data) {
        console.log('leaveRoom', data);
    });


};