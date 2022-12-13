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

    async create({alumno}){
        const sqlCreate = `insert into tbl_alumno(alumno_nombre,alumno_email)
                           values ('${alumno.nombre}','${alumno.email}')`;

        await this.sql.querySql(sqlCreate);
        const sqlAlumnoCreado = "select * from tbl_alumno order by alumno_id desc limit 1";
        const result = await this.sql.querySql(sqlAlumnoCreado);
        return result
    }
}

module.exports = AlumnoService;