from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms.fields import StringField,SubmitField

class AreaForm(FlaskForm):
    descripcion = StringField('Nueva Area',validators=[DataRequired()])
    submit = SubmitField('Agregar Area')
    
class NivelForm(FlaskForm):
    descripcion = StringField('Nuevo Nivel',validators=[DataRequired()])
    submit = SubmitField('Agregar Nivel')