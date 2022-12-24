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