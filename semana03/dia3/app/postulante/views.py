from flask import Flask,render_template,request

from . import postulante

@postulante.route('/')
def index():
    return render_template('postulante/index.html')