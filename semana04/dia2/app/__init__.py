from flask import Flask,jsonify
from flask_sqlalchemy import SQLAlchemy

## importación de blueprints
from .blueprints.ofertas import ofertas
## parametros de configuración
from .config import Config

app = Flask(__name__)


app.config.from_object(Config)
app.app_context().push()

db = SQLAlchemy(app)


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