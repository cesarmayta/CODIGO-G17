const express  = require('express');
const AlumnoService = require('../services/alumno.service');

function alumnoApi(app){
    const router = express.Router();
    app.use('/alumno',router);

    const objAlumnoService = new AlumnoService();

    router.get('/',async function(req,res){
        try{
            const alumnos = await objAlumnoService.getAll();
            res.status(200).json({
                status:true,
                content:alumnos
            })
        }catch(err){
            console.log(err)
        }
    })

    router.post('/',async function(req,res){
        const {body: alumno} = req;
        console.log(alumno);
        try{
            const crearAlumno = await objAlumnoService.create({alumno});
            res.status(201).json({
                status:true,
                content:crearAlumno[0]
            })
        }catch(err){
            console.log(err)
        }
    })
}

module.exports = alumnoApi;