from utils.db import db

class TblArea(db.Model):
    area_id = db.Column(db.Integer,primary_key=True)
    area_descripcion = db.Column(db.String(100),nullable=False)
    
    def __init__(self,descripcion):
        self.area_descripcion = descripcion
    