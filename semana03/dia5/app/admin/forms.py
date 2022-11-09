from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms.fields import StringField,SubmitField,TextAreaField,SelectField

from app import dbConn

def obtenerUbicaciones():
    cursor = dbConn.cursor()
    cursor.execute("select ubicacion_id as id,ubicacion_ciudad as descripcion from tbl_ubicacion where ubicacion_pais = 'Perú'")
    data = cursor.fetchall()
    return data

def obtenerModalidades():
    cursor = dbConn.cursor()
    cursor.execute("select modalidad_id as id,modalidad_descripcion as descripcion from tbl_modalidad")
    data = cursor.fetchall()
    return data

def obtenerAreas():
    cursor = dbConn.cursor()
    cursor.execute("select area_id as id,area_descripcion as descripcion from tbl_area")
    data = cursor.fetchall()
    return data

def obtenerPeriodos():
    cursor = dbConn.cursor()
    cursor.execute("select periodo_id as id,periodo_descripcion as descripcion from tbl_periodo")
    data = cursor.fetchall()
    return data

def obtenerNiveles():
    cursor = dbConn.cursor()
    cursor.execute("select nivel_id as id,nivel_descripcion as descripcion from tbl_nivel")
    data = cursor.fetchall()
    return data

class AreaForm(FlaskForm):
    descripcion = StringField('Area',validators=[DataRequired()])
    submit = SubmitField('Guardar')
    
class NivelForm(FlaskForm):
    descripcion = StringField('Nivel',validators=[DataRequired()])
    submit = SubmitField('Guardar')
    
class ModalidadForm(FlaskForm):
    descripcion = StringField('Modalidad',validators=[DataRequired()])
    submit = SubmitField('Guardar')
    
class OfertaForm(FlaskForm):
    titulo = StringField('Titulo',validators=[DataRequired()])
    resumen = TextAreaField('Resumen',validators=[DataRequired()])
    detalle = TextAreaField('Detalle',validators=[DataRequired()])
    ubicacion = SelectField('Ciudad', choices=obtenerUbicaciones())
    modalidad = SelectField('Modalidad',choices=obtenerModalidades())
    area = SelectField('Area',choices=obtenerAreas())
    periodo = SelectField('Periodo',choices=obtenerPeriodos())
    nivel = SelectField('Nivel',choices=obtenerNiveles())
    submit = SubmitField('Guardar')