from flask import Flask,render_template,request

from . import postulante

@postulante.route('/')
def index():
    return render_template('postulante/index.html')

@postulante.route('/registro')
def registro():
    return render_template('postulante/registro.html')

@postulante.route('/login')
def login():
    return render_template('postulante/login.html')

@postulante.route('/editarperfil')
def editarperfil():
    return render_template('postulante/editar_perfil.html')