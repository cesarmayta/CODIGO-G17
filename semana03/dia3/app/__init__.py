from flask import Flask

#blueprints
from .portal import portal



def create_app():
    app = Flask(__name__)
    
    app.register_blueprint(portal)
    
    return app