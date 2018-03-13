module.exports = function(app) {

    app.io.on('connection', function(socket) {
        console.log('Client Connected:', socket.id);

        socket.on('disconnect', function() {
            console.log('-- Client Disconnected:', socket.id);
        });
    });

    app.io.route('login', function(req, res) {
        app.io.emit('new-message', {
            from: 'system',
            msg: req.socket.id + ' has joined!'
        });
        res.send('Logined!');
    });
}