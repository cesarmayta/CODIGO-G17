from flask import jsonify,url_for,redirect,request


from .models import Area,TblModalidad,TblNivel,Oferta
from .schemas import AreaSchema,ModalidadSchema,NivelSchema,OfertaSchema

from utils.db import db

class OfertaController:
    
    def index(self):
        context = {
            'status':True,
            'content':'api rest de ofertas laborales'
        }
        
        return jsonify(context)
    
    def getOferta(self):
        listaDatos = Oferta.query.all()
        print(listaDatos)
        oferta_schema = OfertaSchema(many=True)
        
        context = {
            'status':True,
            'content':oferta_schema.dump(listaDatos)
        }
    
        return jsonify(context)

class AreaController:
    
    def getAll(self):
        listaAreas = Area.query.all() # select * from tbl_area
        print(listaAreas)
        area_schema = AreaSchema(many=True)
        
        context = {
            'status':True,
            'content':area_schema.dump(listaAreas)
        }
        
        print(context)
        
        return jsonify(context)
    
    def getById(self,id):
        dato = Area.query.get(id)
        data_schema = AreaSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(dato)
        }
        
        return jsonify(context)
    
    def getByDesc(self,descripcion):
        datos = Area.query.filter(Area.area_descripcion==descripcion)
        
        data_schema = AreaSchema(many=True)
        
        context = {
            'status':True,
            'content':data_schema.dump(datos)
        }
        
        return jsonify(context)
    
class ModalidadController:
    
    def getModalidad(self):
        listaDatos = TblModalidad.query.all()
        data_schema = ModalidadSchema(many=True)
        
        context = {
            'status':True,
            'content':data_schema.dump(listaDatos)
        }
        
        return jsonify(context)
    
class NivelController:
    
    def getNivel(self):
        #listaDatos = db.session.query(Nivel).all()
        listaDatos = TblNivel.query.all()
        print(listaDatos)
        
        data_schema = NivelSchema(many=True)
        
        context = {
            'status':True,
            'content':data_schema.dump(listaDatos)
        }
        
        return jsonify(context)
    
    def getNivelById(self,id):
        dato = TblNivel.query.get(id)
        data_schema = NivelSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(dato)
        }
        
        return jsonify(context)
        
        