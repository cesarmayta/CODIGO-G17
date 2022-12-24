const express = require('express')
const {config} = require('./config')

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.use(new GoogleStrategy({
    clientID:config.google.clientId,
    clientSecret:config.google.clientSecret,
    callbackURL:"http://localhost:5000/callback"
},function(accessToken,refreshToken,profile,done){
    console.log(profile);
    return done(null,profile);
}))

const app = express();
app.use(express.static('src/public'));

app.get('/google/auth',
passport.authenticate('google',{scope: ["profile","email"]}))

app.get('/callback',
    passport.authenticate('google',{failureRedirect:'/failed',session:false}),
    function(req,res){
        res.send('<h1>BIENVENIDO</h1>')
    }
)

app.get('/failed',(req,res)=>{
    res.send('<h1>ERROR EN EL LOGIN DE GOOGLE</h1>')
})

app.listen(config.port,function(){
    console.log("servidor en http://localhost:"+config.port)
})
