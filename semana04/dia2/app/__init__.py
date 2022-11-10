from flask import Flask,jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

## importación de blueprints
from .blueprints.ofertas import ofertas
## parametros de configuración
from .config import Config

app = Flask(__name__)


app.config.from_object(Config)


db = SQLAlchemy()
#ma = Marshmallow(app)

#app.app_context().push()

#db.init_app(app)

#registramos blueprints
app.register_blueprint(ofertas)

@app.route('/')
def index():
    context = {
        'status':True,
        'content':'Servidor activo'
    }
    return jsonify(context)


if __name__=="__main__":
    app.run(debug=True,port=5000)