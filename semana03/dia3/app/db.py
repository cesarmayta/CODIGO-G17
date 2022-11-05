from flask import current_app
from mysqldb import MysqlDb 


current_app.config['MYSQL_HOST'] = 'localhost'
    current_app.config['MYSQL_USER'] = 'root'
    current_app.config['MYSQL_PASSWORD'] = ''
    current_app.config['MYSQL_DB'] = 'db_smartdevs'
    
db = MysqlDb(current_app)