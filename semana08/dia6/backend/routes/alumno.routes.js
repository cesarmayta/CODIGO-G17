const express  = require('express');
const AlumnoService = require('../services/alumno.service');

const boom = require('@hapi/boom');

const validatorHandler = require('../middlewares/validator.handler');
const {createAlumnoSchema} = require('../schemas/alumno.schema');

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

    router.post('/',
        validatorHandler(createAlumnoSchema,'body')
        ,async function(req,res){
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

    //para retornar 1 alumno
    router.get('/:id',async function(req,res){
        const {id} = req.params;
        try{
            //console.log(a)
            const alumno = await objAlumnoService.getById(id);
            if(alumno.length > 0){
                res.status(200).json({
                    status:true,
                    content:alumno[0]
                })
            }else{
                /*res.status(200).json({
                    status:false,
                    content:'no existe el alumno'
                })*/
                res.json(boom.badData('no existe alumno'))
            }
        }
        catch(err){
            res.status(500).json(boom.badImplementation('error en la consulta'))
        }
    })
    //para actualizar 1 alumno
    router.put('/:id',async function(req,res){
        const {id} = req.params;
        const {body: data} = req;

        try{
            const alumno = await objAlumnoService.update({data,id});
            if(alumno.length > 0){
                res.status(200).json({
                    status:true,
                    content:alumno[0]
                })
            }else{
                res.status(200).json({
                    status:false,
                    content:'no existe el alumno a modificar'
                })
            }
        }
        catch(err){
            console.log(err);
        }
    })
    //eliminar un registro
    router.delete('/:id',async function(req,res){
        const {id} = req.params;
        try{
            const alumno = await objAlumnoService.delete(id);
            if(alumno){
                res.status(200).json({
                    status:true,
                    content:'registro eliminado'
                })
            }else{
                res.status(204).json({
                    status:false,
                    content:'no existe el alumno a eliminar'
                })
            }
        }
        catch(err){
            console.log(err);
        }
    })
}

module.exports = alumnoApi;