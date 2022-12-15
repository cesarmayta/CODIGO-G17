const {Alumno,AlumnoSchema} = require('./alumno.models');

function setupModels(sequelize){
    Alumno.init(AlumnoSchema,Alumno.config(sequelize))
}

module.exports = setupModels;