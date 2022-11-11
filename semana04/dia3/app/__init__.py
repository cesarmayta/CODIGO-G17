from flask import Flask,jsonify
## importación de blueprints
from .blueprints.ofertas import ofertas
## parametros de configuración
from .config import Config


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    #registramos blueprints
    app.register_blueprint(ofertas)
    
    return app


