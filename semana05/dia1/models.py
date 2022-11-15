from flask_login import UserMixin
from werkzeug.security import check_password_hash,generate_password_hash

db_user = []

class User(UserMixin):
    
    def __init__(self,id,firstname,lastname,email,password):
        self.id = id
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.password = generate_password_hash(password)
        
    def verify_password(self,password):
        return check_password_hash(self.password,password)