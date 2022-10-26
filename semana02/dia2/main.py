from flask import Flask,request,render_template

app = Flask(__name__)

@app.route('/mensaje')
def mostrarMensaje():
    nombre = request.args.get('nombre','no hay nombre')
    return 'HOLA {}'.format(nombre)

@app.route('/')
def index():
    listaPokemon = ['pikachu','Charmander','Snorlax','Bulbasaur']
    #nombreRequest = request.args.get('nombre','no hay nombre')
    
    return render_template('index.html',pokemon=listaPokemon)

#desplegamos el servidor web
app.run(debug=True)