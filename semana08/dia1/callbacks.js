function hola(nombre,primercallback){
    setTimeout(function(){
        console.log('Hola ' + nombre);
        primercallback(nombre)
    },1000)
}

function hablar(nombre,segundocallback){
    setTimeout(function(){
        console.log('Como estas ' + nombre);
        segundocallback(nombre);
    },1000)
    
}

nombre = 'César Mayta';

hola(nombre,function(nombre){
    hablar(nombre,function(nombre){
        console.log('adios ...');
    });
});
