from flask_wtf import FlaskForm
from wtforms import StringField,PasswordField,EmailField
from wtforms.validators import DataRequired, Email

class RegisterForm(FlaskForm):
    firstname = StringField(render_kw={"placeholder":"First Name"},
                            validators=[DataRequired(message="Enter First Name")])
    lastname = StringField(render_kw={"placeholder":"Last Name"},
                           validators=[DataRequired(message="Enter Last Name")])
    email = EmailField(render_kw={"placeholder": "Email Address"},
                       validators=[DataRequired(message="Enter Email Address"),
                                   Email(message="Enter a valid Email")])
    password = PasswordField(render_kw={"placeholder":"Password"},
                        validators=[DataRequired(message="Enter a Password")])