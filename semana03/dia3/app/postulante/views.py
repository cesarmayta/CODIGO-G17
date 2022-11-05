from flask import Flask,render_template,request

from . import postulante
from db import db

## vistas para autenticación y registro de postulante
@postulante.route('/registro')
def registro():
    return render_template('postulante/registro.html')

@postulante.route('/login')
def login():
    return render_template('postulante/login.html')


## vistas para panel de administración de postulantes

@postulante.route('/')
def index():
    cursor = db.connection.cursor()
    cursor.execute('select * from tbl_tipo_contacto')
    data = cursor.fetchall()
    print(data)
    cursor.close()
    return render_template('postulante/index.html')

@postulante.route('/editarperfil')
def editarperfil():
    return render_template('postulante/editar_perfil.html')