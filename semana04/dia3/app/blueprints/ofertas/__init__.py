from flask import Blueprint

from .controllers import OfertaLaboralController,AreaController

#bluepring para api rest de ofertas laborales
ofertas = Blueprint('ofertas',__name__,url_prefix='/ofertas')


ofertaController = OfertaLaboralController()


### rutas ###
ofertas.add_url_rule('/',view_func=ofertaController.index,methods=['GET'])
ofertas.add_url_rule('/area',view_func=AreaController().getArea,methods=['GET'])