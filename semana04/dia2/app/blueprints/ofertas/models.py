from app import db

class Area(db.Model):
    __tablename__ = "tbl_area"
    area_id = db.Column(db.Integer,primary_key=True)
    area_descripcion = db.Column(db.String(100),nullable=False)
    
    def __init__(self,descripcion):
        self.area_descripcion = descripcion
    