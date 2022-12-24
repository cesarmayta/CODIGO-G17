require('dotenv').config()

const config = {
    port : process.ENV.PORT || '5000',
    google :{
        clientId : process.env.GOOGLE_CLIENT_ID,
        clientSecret : process.env.GOOGLE_CLIENT_SECRET
    }
}

module.exports =  {config}