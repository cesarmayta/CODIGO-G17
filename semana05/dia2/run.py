from flask import Flask,jsonify,request


app = Flask(__name__)

@app.route('/')
def index():
    context = {
        'status':True,
        'content':'Bienvenido a mi apirest con flask mysql y jwt'
    }
    return jsonify(context)


app.run(debug=True)