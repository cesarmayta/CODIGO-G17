from flask import jsonify,url_for,redirect,request


from .models import TblArea
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
        listaAreas = TblArea.query.all()
        print(listaAreas)
        area_schema = AreaSchema(many=True)
        
        context = {
            'status':True,
            'content':area_schema.dump(listaAreas)
        }
        
        return jsonify(context)