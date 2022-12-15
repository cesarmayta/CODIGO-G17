const { Sequelize } = require('sequelize');
const {config} = require('../config');

const setupModels = require('../models')

const sequelize = new Sequelize(
    config.mysql_db,
    config.mysql_user,
    config.mysql_pwd,
    {
        host: config.mysql_host,
        port: config.mysql_port,
        dialect:'mysql'
    }

);

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;