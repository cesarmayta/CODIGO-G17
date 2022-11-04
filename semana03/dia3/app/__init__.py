from flask import Flask

#blueprints
from .portal import portal
from .postulante import postulante


def create_app():
    app = Flask(__name__)
    
    app.register_blueprint(portal)
    app.register_blueprint(postulante)
    
    return app