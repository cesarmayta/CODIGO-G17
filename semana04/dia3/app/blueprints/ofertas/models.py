from utils.db import db
#tbl_area = TblArea
class TblArea(db.Model):
    area_id = db.Column(db.Integer,primary_key=True)
    area_descripcion = db.Column(db.String(100),nullable=False)
    
    def __init__(self,descripcion):
        self.area_descripcion = descripcion 
        
class TblModalidad(db.Model):
    modalidad_id = db.Column(db.Integer,primary_key=True)
    modalidad_descripcion = db.Column(db.String(100),nullable=False)
    
    def __init__(self,descripcion):
        self.modalidad_descripcion = descripcion
        
Nivel = db.Table('tbl_nivel',db.metadata,
                 db.Column('nivel_id',db.Integer,primary_key=True),
                 db.Column('nivel_descripcion',db.String)
)