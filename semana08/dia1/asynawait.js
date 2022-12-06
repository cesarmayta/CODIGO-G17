async function hola(nombre){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Hola " + nombre);
            resolve(nombre);
            reject("hay un error");
        },1000)
    })
}

async function hablar(nombre){
    return new Promise((resolve,reject)=>{
        console.log("como estas " + nombre);
        resolve(nombre);
        reject('no te entiendo')
    },1000)
}

async function main(){
    let nombre = await hola('César')
    await hablar(nombre);
    console.log("Adios ...");
}

main();