from flask import Flask,render_template,request

from . import admin

from app import dbConn

#formularios
from .forms import AreaForm

@admin.route('/')
def index():
    return render_template('admin/index.html')

@admin.route('/area',methods=['GET','POST'])
def area():
    
    #formulario de Area
    area_form = AreaForm()
    
    #validar si se envio el formulario
    if area_form.validate_on_submit():
        #registramos la nueva area
        areaDescripcion = area_form.descripcion.data
        cursorInsert = dbConn.cursor()
        cursorInsert.execute("insert into tbl_area(area_descripcion) values ('"+areaDescripcion+"')")
        dbConn.commit()
        
        cursorInsert.close()
    
    cursor = dbConn.cursor(dictionary=True)
    cursor.execute('select area_id as id,area_descripcion as descripcion from tbl_area')
    data = cursor.fetchall()
    print(data)
    cursor.close()
    
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

@admin.route('/nivel')
def nivel():
    cursor = dbConn.cursor(dictionary=True)
    cursor.execute('select nivel_id as id,nivel_descripcion as descripcion from tbl_nivel')
    data = cursor.fetchall()
    cursor.close()
    
    context = {
        'niveles':data
    }
    
    return render_template('admin/nivel.html',**context)