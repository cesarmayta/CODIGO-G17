const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main(){
    await client.connect();
    console.log("conectado a mongodb");

    const db = client.db('db_tareas');
    const collection = db.collection('tareas');

    const insertar = await collection.insertOne({descripcion:"conectar mongodb con js",estado:"terminado"});
    console.log('nueva tarea :',insertar);
    
    const result = await collection.find({}).toArray();
    console.log('lista de tareas:',result);
    return 0;
}

main()