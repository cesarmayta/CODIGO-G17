require('dotenv').config();

const config = {
    port: process.env.PORT || '5000',
    dbUser: process.env.DBUSER || 'root',
    dbHost: process.env.DBHOST || 'localhost',
    dbPassword: process.env.DBPASSWORD || '',
    dbDatabase: process.env.DATABASE || 'db_ecommerce_g17',
    dbPort: process.env.DBPORT || '3306',
    mediaFolder : process.env.MEDIAFOLDER || 'http://localhost:8000/media/'
}

module.exports = {config}