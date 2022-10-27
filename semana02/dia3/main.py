from flask import Flask,request,render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/detalle')
def detalleOferta():
    return render_template('detalle.html')


app.run(debug=True)