const HomeController = require('./controllers/home.controller');

module.exports = function(app) {
    app.get('/api/home', HomeController.home)
};