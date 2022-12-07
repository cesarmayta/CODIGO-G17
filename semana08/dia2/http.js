const http = require('http');

http.createServer(function(req,res){
    console.log("servidor activo")
    console.log(req.url);

    switch(req.url){
        case '/':
            res.write('<h1>Bienvenido a mi primera pagina con nodejs</h1>')
            res.end();
            break;
        case '/login':
            res.write('<h1><center>Login</center></h1>')
            res.end()
    }

    
}).listen(5000);