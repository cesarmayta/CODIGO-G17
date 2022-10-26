from flask import Flask,request,render_template

app = Flask(__name__)

@app.route('/mensaje')
def mostrarMensaje():
    nombre = request.args.get('nombre','no hay nombre')
    return 'HOLA {}'.format(nombre)

@app.route('/')
def index():
    nombreRequest = request.args.get('nombre','no hay nombre')
    return render_template('index.html',nombre=nombreRequest)

#desplegamos el servidor web
app.run(debug=True)