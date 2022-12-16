const mongoose = require('mongoose');

async function main(){
    await mongoose.connect('mongodb://localhost:27017/db_tareas');

    //crear un schema
    const TareaSchema = new mongoose.Schema({
        descripcion:String,
        estado:String
    })

    const Tarea = mongoose.model('tareas',TareaSchema);

    //insertamos un nuevo registro
    const nuevaTarea = new Tarea({descripcion:'aprender mongoose',estado:'pendiente'});
    await nuevaTarea.save();

    const listadoTareas = await Tarea.find();
    console.log(listadoTareas);
}

main();