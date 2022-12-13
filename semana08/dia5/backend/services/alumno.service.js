const MysqlLib = require('../lib/mysql');

class AlumnoService{

    constructor(){
        this.sql = new MysqlLib();
    }

    async getAll(){
        const sqlAll = "select * from tbl_alumno";
        const result = await this.sql.querySql(sqlAll);
        return result;
    }
}

module.exports = AlumnoService;