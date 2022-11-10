from flask import jsonify,url_for,redirect,request

class OfertaLaboralController:
    
    def index(self):
        context = {
            'status':True,
            'content':'api rest de ofertas laborales'
        }
        
        return jsonify(context)