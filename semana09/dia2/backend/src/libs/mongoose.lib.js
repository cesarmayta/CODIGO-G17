const {config} = require('../config');
const mongoose = require('mongoose');

mongoose.Promise=global.Promise;

mongoose.connect(config.mongoUri);
mongoose.pluralize(null);

console.log("conectado a mongodb");