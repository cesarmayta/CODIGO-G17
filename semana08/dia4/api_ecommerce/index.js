const express =  require('express')
const {config} = require('./config')
const app = express();

app.get('/',(req,res)=>{
    res.json({
        mensaje:'bienvenido a mi api de ecommerce'
    })
})

app.use(require('./routes/categoria'));
app.use(require('./routes/marca'));
app.use(require('./routes/producto'));

app.listen(config.port,function(){
    console.log('SERVIDOR EN http://localhost:'+config.port);
})