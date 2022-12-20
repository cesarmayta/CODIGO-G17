const express = require('express');
const {config} = require('./config');
const cors = require('cors');

const app = express();

app.use(cors())

app.use(express.json())

app.set('port',config.port);

app.use('/tarea',require('./routes/tarea.route'));

module.exports = app;
