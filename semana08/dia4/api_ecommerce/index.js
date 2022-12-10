const express =  require('express')
const app = express();

app.get('/',(req,res)=>{
    res.json({
        mensaje:'bienvenido a mi api de ecommerce'
    })
})

app.listen(5000,function(){
    console.log('SERVIDOR EN http://localhost:5000');
})