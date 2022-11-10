from flask import Flask,jsonify

from .blueprints.ofertas import ofertas


app = Flask(__name__)

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