const mongoose = require('mongoose');

mongoose.connect(configManager.get('db.uri'));
mongoose.Promise = require('bluebird');
require('mongoose-pagination');
console.log('Kết nối MongoDB');