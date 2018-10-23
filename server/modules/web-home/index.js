
module.exports = function (app) {
  app.get('/', (req, res) => {
    res.render('layout', {
      date: new Date().getTime()
    });
  });
};