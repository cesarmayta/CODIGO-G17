const MysqlLib = require('../lib/mysql');

const sequelize = require('../lib/sequelize');

const {models} = require('../lib/sequelize');

class AlumnoService{

    constructor(){
        this.sql = new MysqlLib();
    }

    async getAll(){
        //const sqlAll = "select * from tbl_alumno";
        //const result = await this.sql.querySql(sqlAll);
        //const [result, metadata] = await sequelize.query(sqlAll);
        //console.log(metadata)
        const result = await models.Alumno.findAll();
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

    async getById(id){
        const sqlGetById = `select * from tbl_alumno
                            where alumno_id = '${id}'`;
        
        const result = await this.sql.querySql(sqlGetById);
        return result;
    }

    async update({data,id}){
        const sqlUpdate = `update tbl_alumno set
                           alumno_nombre = '${data.nombre}'
                           ,alumno_email = '${data.email}'
                           where alumno_id = '${id}'`;
        await this.sql.querySql(sqlUpdate);
        const sqlAlumnoActualizado =  `select * from tbl_alumno where alumno_id='${id}'`;
        const result = await this.sql.querySql(sqlAlumnoActualizado);
        return result;
    }

    async delete(id){
        const sqlDeleteAlumno = `delete from tbl_alumno
                                where alumno_id = '${id}'`
        await this.sql.querySql(sqlDeleteAlumno);
        return true;
    }
}

module.exports = AlumnoService;