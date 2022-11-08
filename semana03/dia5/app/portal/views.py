from flask import Flask,render_template,request

from . import portal

@portal.route('/')
def index():
    return render_template('portal/index.html')