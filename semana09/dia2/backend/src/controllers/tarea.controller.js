const tareaController = {};

const tareaModel = require('../models/tarea.model');

tareaController.getAll = async (req,res)=>{
    const tareas = await tareaModel.find();
    res.json({
        status:true,
        content:tareas
    })
}

module.exports = tareaController;