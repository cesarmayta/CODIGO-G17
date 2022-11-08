from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms.fields import StringField,SubmitField

class AreaForm(FlaskForm):
    descripcion = StringField('Area',validators=[DataRequired()])
    submit = SubmitField('Guardar')
    
class NivelForm(FlaskForm):
    descripcion = StringField('Nivel',validators=[DataRequired()])
    submit = SubmitField('Guardar')
    
class ModalidadForm(FlaskForm):
    descripcion = StringField('Modalidad',validators=[DataRequired()])
    submit = SubmitField('Guardar')