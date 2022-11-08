from flask import Flask
from flask_bootstrap import Bootstrap4

from .config import Config

#conexion a base de datos
from app.mysql_conn import MysqlDb
mysqlDb = MysqlDb('localhost','root','','db_smartdevs')
dbConn = mysqlDb.getConn()


#blueprints
from .portal import portal
from .postulante import postulante
from .admin import admin

def create_app():
    app = Flask(__name__)
    
    bootstrap = Bootstrap4(app)
    
    app.config.from_object(Config)
    
    app.register_blueprint(portal)
    app.register_blueprint(postulante)
    app.register_blueprint(admin)
    
    return app