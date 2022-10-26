from flask import Flask,request,render_template
import requests
import json

BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

def consultarPokedApi(nombrePokemon):
    url = BASE_URL + nombrePokemon
    response = requests.get(url)
    
    if(response.status_code == 200):
        return json.loads(response.text)
    else:
        return None
        

app = Flask(__name__)



@app.route('/mensaje')
def mostrarMensaje():
    nombre = request.args.get('nombre','no hay nombre')
    return 'HOLA {}'.format(nombre)

@app.route('/')
def index():
    listaPokemon = ['pikachu','Charmander','Snorlax','Bulbasaur']
    nombreRequest = request.args.get('nombre','no hay nombre')
    imagenPokemon = 'https://image.shutterstock.com/image-vector/image-not-found-grayscale-photo-260nw-1737334631.jpg'
    if(nombreRequest != 'no hay nombre'):
        dataPokemon = consultarPokedApi(nombreRequest)
        if dataPokemon != None:
            sprites = dataPokemon['sprites']
            imagenPokemon = sprites['front_default']
    
    return render_template('index.html',nombre=nombreRequest,pokemon=listaPokemon,imagen=imagenPokemon)

@app.route('/peliculas')
def peliculas():
    listaPeliculas = ['El codigo de la discordia','Piratas de sillicon valley','Jobs','Player One']
    
    return render_template('peliculas.html',peliculas=listaPeliculas)

#desplegamos el servidor web
app.run(debug=True)