from flask import Flask,render_template,request,redirect,url_for

from . import admin

from app import dbConn

#formularios
from .forms import AreaForm,NivelForm

@admin.route('/')
def index():
    return render_template('admin/index.html')
############################ AREA #######################
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

@admin.route('/area/<id>',methods=['GET','POST'])
def areaDetalle(id=''):
    cursorForm = dbConn.cursor(dictionary=True)
    cursorForm.execute('select area_descripcion as descripcion from tbl_area where area_id = ' + id)
    dataCursor = cursorForm.fetchall()
    
    area_form = AreaForm(data=dataCursor[0])
    
    #validar si se envio el formulario para actualizar
    if area_form.validate_on_submit():
        #actualizamos el area
        areaDescripcion = area_form.descripcion.data
        cursorUpdate = dbConn.cursor()
        cursorUpdate.execute("update tbl_area set area_descripcion = '"+areaDescripcion+"' where area_id = '"+id+"'")
        dbConn.commit()
        
        cursorUpdate.close()
        
        return redirect(url_for('admin.area'))
    
    cursor = dbConn.cursor(dictionary=True)
    cursor.execute('select area_id as id,area_descripcion as descripcion from tbl_area')
    data = cursor.fetchall()
    cursor.close()
    
    context = {
        'areas':data,
        'form':area_form
    }

    return render_template('admin/area.html',**context)
    
    
############################### MODALIDAD #############################
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

@admin.route('/nivel',methods=['GET','POST'])
def nivel():
    #CREAMOS FORMULARIO
    nivel_form = NivelForm()
    
    #validar si se envio el formulario
    if nivel_form.validate_on_submit():
        #registramos la nueva area
        descripcionData = nivel_form.descripcion.data
        cursorInsert = dbConn.cursor()
        cursorInsert.execute("insert into tbl_nivel(nivel_descripcion) values ('"+descripcionData+"')")
        dbConn.commit()
        
        cursorInsert.close()
    
    cursor = dbConn.cursor(dictionary=True)
    cursor.execute('select nivel_id as id,nivel_descripcion as descripcion from tbl_nivel')
    data = cursor.fetchall()
    cursor.close()
    
    context = {
        'niveles':data,
        'form':nivel_form
    }
    
    return render_template('admin/nivel.html',**context)