from flask import jsonify,url_for,redirect,request

from .models import Area
from .schemas import AreaSchema

class OfertaLaboralController:
    
    def index(self):
        context = {
            'status':True,
            'content':'api rest de ofertas laborales'
        }
        
        return jsonify(context)
    

class AreaController:
    
    def getArea(self):
        listaAreas = Area.query.all() #select * from tbl_area
        
        area_schema = AreaSchema(many=True)
        
        context = {
            'status':True,
            'content':area_schema.dump(listaAreas)
        }
        
        return jsonify(context)