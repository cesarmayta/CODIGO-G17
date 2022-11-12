from utils.db import db
#tbl_area = TblArea
class Area(db.Model):
    __tablename__ = "tbl_area"
    
    area_id = db.Column(db.Integer,primary_key=True)
    area_descripcion = db.Column(db.String(100),nullable=False)
    ofertas = db.relationship("Oferta")
    
    def __init__(self,descripcion):
        self.area_descripcion = descripcion 
        
class TblModalidad(db.Model):
    modalidad_id = db.Column(db.Integer,primary_key=True)
    modalidad_descripcion = db.Column(db.String(100),nullable=False)
    
    def __init__(self,descripcion):
        self.modalidad_descripcion = descripcion
        
"""Nivel = db.Table('tbl_nivel',db.metadata,
                 db.Column('nivel_id',db.Integer,primary_key=True),
                 db.Column('nivel_descripcion',db.String)
)"""

class TblNivel(db.Model):
    nivel_id = db.Column(db.Integer,primary_key=True)
    nivel_descripcion = db.Column(db.String(100),nullable=False)
    
    def __init__(self,descripcion):
        self.nivel_descripcion = descripcion
        
class Oferta(db.Model):
    __tablename__ = "tbl_oferta"
    
    oferta_id = db.Column(db.Integer,primary_key=True)
    oferta_titulo = db.Column(db.String(255),nullable=False)
    area_id = db.Column(db.Integer,ForeignKey("tbl_area.area_id"))
    
    def __init__(self,titulo):
        self.oferta_titulo = titulo
    
    
