from flask import Flask,render_template,request

from . import admin

@admin.route('/')
def index():
    return render_template('admin/index.html')