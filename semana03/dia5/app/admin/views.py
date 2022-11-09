from flask import Flask,render_template,request,redirect,url_for

from . import admin

from app import dbConn

#formularios
from .forms import AreaForm,NivelForm,ModalidadForm,OfertaForm

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
    
@admin.route('/area/<id>/eliminar')
def eliminarArea(id=''):
    
    cursorDelete = dbConn.cursor()
    cursorDelete.execute('delete from tbl_area where area_id='+id)
    dbConn.commit
    cursorDelete.close()
    
    return redirect(url_for('admin.area'))
    
############################### MODALIDAD #############################
@admin.route('/modalidad',methods=['GET','POST'])
def modalidad(id=''):
    
    modalidad_form = ModalidadForm()
    
    #validar si se envio el formulario
    if modalidad_form.validate_on_submit():
        #registramos la nueva area
        modalidadDescripcion = modalidad_form.descripcion.data
        cursorInsert = dbConn.cursor()
        cursorInsert.execute("insert into tbl_modalidad(modalidad_descripcion) values ('"+modalidadDescripcion+"')")
        dbConn.commit()
        
        cursorInsert.close()
    
    cursor = dbConn.cursor(dictionary=True)
    cursor.execute('select modalidad_id as id,modalidad_descripcion as descripcion from tbl_modalidad')
    data = cursor.fetchall()
    cursor.close()
    
    context = {
        'modalidades':data,
        'form':modalidad_form
    }
    
    return render_template('admin/modalidad.html',**context)

@admin.route('/modalidad/<id>',methods=['GET','POST'])
def modalidadDetalle(id=''):
    cursorForm = dbConn.cursor(dictionary=True)
    cursorForm.execute('select modalidad_descripcion as descripcion from tbl_modalidad where modalidad_id = ' + id)
    dataCursor = cursorForm.fetchall()
    
    modalidad_form = ModalidadForm(data=dataCursor[0])
    
    #validar si se envio el formulario para actualizar
    if modalidad_form.validate_on_submit():
        #actualizamos el area
        modalidadDescripcion = modalidad_form.descripcion.data
        cursorUpdate = dbConn.cursor()
        cursorUpdate.execute("update tbl_modalidad set modalidad_descripcion = '"+modalidadDescripcion+"' where modalidad_id = '"+id+"'")
        dbConn.commit()
        
        cursorUpdate.close()
        
        return redirect(url_for('admin.modalidad'))
    
    cursor = dbConn.cursor(dictionary=True)
    cursor.execute('select modalidad_id as id,modalidad_descripcion as descripcion from tbl_modalidad')
    data = cursor.fetchall()
    cursor.close()
    
    context = {
        'modalidades':data,
        'form':modalidad_form
    }

    return render_template('admin/modalidad.html',**context)

@admin.route('/modalidad/<id>/eliminar')
def eliminarModalidad(id=''):
    
    cursorDelete = dbConn.cursor()
    cursorDelete.execute('delete from tbl_modalidad where modalidad_id='+id)
    dbConn.commit()
    cursorDelete.close()
    
    return redirect(url_for('admin.modalidad'))

############################ NIVELES ################################
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

############################ OFERTAS LABORALES
@admin.route('/nuevaoferta',methods=['GET','POST'])
def nuevaOferta():
    
    oferta_form = OfertaForm()
    
    if oferta_form.validate_on_submit():
        #registramos la nueva area
        tituloData = oferta_form.titulo.data
        resumenData = oferta_form.resumen.data
        detalleData = oferta_form.detalle.data
        ubicacionData = oferta_form.ubicacion.data
        modalidadData = oferta_form.modalidad.data
        areaData = oferta_form.area.data
        periodoData = oferta_form.periodo.data
        nivelData = oferta_form.nivel.data
        
        sqlInsert = """insert into tbl_oferta
                        (oferta_titulo,oferta_fec_pub,oferta_fec_fin,oferta_resumen,oferta_detalle,
                        ubicacion_id,modalidad_id,area_id,periodo_id,nivel_id) 
                       values ('"""+tituloData+"""',CURRENT_DATE(),CURRENT_DATE(),'"""+resumenData+"""'
                       ,'"""+detalleData+"""','"""+ubicacionData+"""','"""+modalidadData+"""'
                       ,'"""+areaData+"""','"""+periodoData+"""','"""+nivelData+"""')
                    """
        print(sqlInsert)
        cursorInsert = dbConn.cursor()
        cursorInsert.execute(sqlInsert)
        dbConn.commit()
        
        cursorInsert.close()
        
        return redirect(url_for('admin.oferta'))
    
    context ={
        'form':oferta_form
    }
    
    return render_template('admin/nuevaoferta.html',**context)

@admin.route('/oferta')
def oferta():
    cursor = dbConn.cursor(dictionary=True)
    sqlSelect = """
                select oferta.oferta_id as id,oferta.oferta_titulo as titulo,
                ubicacion.ubicacion_ciudad as ciudad,
                modalidad.modalidad_descripcion as modalidad,
                area.area_descripcion as area,
                periodo.periodo_descripcion as periodo,
                nivel.nivel_descripcion as nivel
                from tbl_oferta oferta
                inner join tbl_ubicacion ubicacion on oferta.ubicacion_id = ubicacion.ubicacion_id
                inner join tbl_modalidad modalidad on oferta.modalidad_id = modalidad.modalidad_id
                inner join tbl_area area on oferta.area_id = area.area_id
                inner join tbl_periodo periodo on oferta.periodo_id = periodo.periodo_id
                inner join tbl_nivel nivel on oferta.nivel_id = nivel.nivel_id
                """
    cursor.execute(sqlSelect)
    data = cursor.fetchall()
    print(data)
    cursor.close()
    
    context = {
        'ofertas':data
    }
    
    return render_template('admin/oferta.html',**context)