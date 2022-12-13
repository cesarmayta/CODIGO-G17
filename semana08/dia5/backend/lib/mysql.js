const mysql = require('mysql')
const {config} = require('../config')

class MysqlLib{

    constructor(){
        this.dbSettings = {
            host : config.mysql_host,
            user : config.mysql_user,
            password : config.mysql_pwd,
            database : config.mysql_db,
            port : config.mysql_port
        }
    }

    async getConnection(){
        
    }

}

module.exports = MysqlLib;