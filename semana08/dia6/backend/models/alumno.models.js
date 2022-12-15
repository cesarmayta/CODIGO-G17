const {Model,DataTypes,Sequelize} = require('sequelize');

const ALUMNO_TABLE = 'tbl_alumno';

const AlumnoSchema = {
    id:{
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER,
        field:'alumno_id'
    },
    nombre:{
        allowNull:false,
        type:DataTypes.STRING,
        field:'alumno_nombre'
    },
    email:{
        allowNull:false,
        type: DataTypes.STRING,
        field:'alumno_email'
    }
}

//creamos el modelo
class Alumno extends Model{
    static associate(){

    }

    static config(sequelize){
        return {
            sequelize,
            tablaName:ALUMNO_TABLE,
            modelName:'Alumno',
            timestamps:false
        }
    }
}

module.exports = {Alumno,AlumnoSchema,ALUMNO_TABLE}