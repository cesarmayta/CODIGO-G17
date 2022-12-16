const express = require('express');
const {config} = require('./config');

const app = express();

app.set('port',config.port);

app.use('/tarea',require('./routes/tarea.route'));

module.exports = app;
