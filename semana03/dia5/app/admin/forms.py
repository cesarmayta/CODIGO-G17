from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms.fields import StringField,SubmitField,TextAreaField,SelectField

from app import dbConn

def obtenerUbicaciones():
    cursor = dbConn.cursor()
    cursor.execute("select ubicacion_id as id,ubicacion_ciudad as descripcion from tbl_ubicacion where ubicacion_pais = 'Perú'")
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