module.exports = {
    port: process.env.PORT || 8888,
    db: {
        uri: 'mongodb://localhost/db_p_chat',
        options: {}
    }
};