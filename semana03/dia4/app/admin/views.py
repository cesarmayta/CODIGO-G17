from flask import Flask,render_template,request

from . import admin

from app import dbConn

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
    
    context = {
        'areas':data
    }
    
    return render_template('admin/area.html',**context)