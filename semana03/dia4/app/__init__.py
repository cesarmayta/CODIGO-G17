from flask import Flask

#blueprints
from .portal import portal
from .postulante import postulante
from .admin import admin

def create_app():
    app = Flask(__name__)
    
    app.register_blueprint(portal)
    app.register_blueprint(postulante)
    app.register_blueprint(admin)
    
    return app