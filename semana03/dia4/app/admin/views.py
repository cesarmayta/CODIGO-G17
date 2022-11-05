from flask import Flask,render_template,request

from . import admin

from app import dbConn

#formularios
from .forms import AreaForm

@admin.route('/')
def index():
    return render_template('admin/index.html')

@admin.route('/area')
def area():
    cursor = dbConn.cursor(dictionary=True)
    cursor.execute('select area_id as id,area_descripcion as descripcion from tbl_area')
    data = cursor.fetchall()
    print(data)
    cursor.close()
    
    #formulario de Area
    area_form = AreaForm()
    
    context = {
        'areas':data,
        'form':area_form
    }
    
    return render_template('admin/area.html',**context)

@admin.route('/modalidad')
def modalidad():
    cursor = dbConn.cursor(dictionary=True)
    cursor.execute('select modalidad_id as id,modalidad_descripcion as descripcion from tbl_modalidad')
    data = cursor.fetchall()
    cursor.close()
    
    context = {
        'modalidades':data
    }
    
    return render_template('admin/modalidad.html',**context)