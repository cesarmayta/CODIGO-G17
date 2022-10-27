from flask import Flask,request,render_template

from libOfertas import OfertaCompuTrabajo



app = Flask(__name__)

listaOfertas = [
    {
        "titulo":"Programador Python",
        "empresa":"M4G Soluciones",
        "descripcion":"En M4G estamos en la búsqueda de un Programador Python para integrarse a nuestro equipo. Somos un equipo que nos impulsamos por trascender desde lo humano hacia lo tecnológico. Creemos que podemos construir un mundo mejor.",
        "url":"https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-programador-python-en-la-molina-44672751D8017C2B61373E686DCF3405"
    },
    {
        "titulo":"Desarrollador React JS Full Stack",
        "empresa":"YT GROUP",
        "descripcion":"Se busca desarrollador React JS con experiencia para trabajar en el desarrollo de sistemas webs y móviles enfocados en el rubro E-Commerce de forma remota.",
        "url":"https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-desarrollador-react-js-full-stack-en-lima-8CF06BF76B60AD8961373E686DCF3405"
    }
]

listaMenu = ['python','react','frontend','backend']

@app.route('/')
def index():
    context = {
        'ofertas':listaOfertas,
        'menu':listaMenu
    }
    return render_template('index.html',**context)

@app.route('/busqueda')
def busqueda():
    valorBusqueda = request.args.get('tipo','python')
    compuTrabajo = OfertaCompuTrabajo()
    listaOfertasCompuTrabajo = compuTrabajo.obtenerOfertas(valorBusqueda)
    
    context = {
        'ofertas':listaOfertasCompuTrabajo,
        'menu':listaMenu
    }
    return render_template('index.html',**context)

@app.route('/detalle')
def detalleOferta():
    
    return render_template('detalle.html')


app.run(debug=True)