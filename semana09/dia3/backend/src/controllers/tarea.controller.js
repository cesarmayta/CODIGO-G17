const tareaController = {};

const tareaModel = require('../models/tarea.model');

tareaController.getAll = async (req,res)=>{
    const tareas = await tareaModel.find();
    res.json({
        status:true,
        content:tareas
    })
}

tareaController.create = async (req,res)=>{
    try{
        console.log(req.body);
        const nuevaTarea = new tareaModel(req.body)
        await nuevaTarea.save();
        res.json({
            status:true,
            content:nuevaTarea
        })

    }catch(error){
        res.status(502).json({'Error':error})
    }
}

module.exports = tareaController;