from flask_wtf import FlaskForm
from wtforms.validators import DataRequired
from wtforms.fields import StringField,SubmitField

class AreaForm(FlaskForm):
    descripcion = StringField('Nueva Area',validators=[DataRequired()])
    submit = SubmitField('Agregar Area')