require('dotenv').config();

const config = {
    port: process.env.PORT || '5000',
    mongoUri : process.env.MONGOURI || 'mongodb://localhost:27017/db_ecommerce',
    cloudinary:{
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET
    }
}

module.exports = {config}