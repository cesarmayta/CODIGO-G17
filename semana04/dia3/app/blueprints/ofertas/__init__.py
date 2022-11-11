from flask import Blueprint

from .controllers import (OfertaLaboralController,AreaController,
 ModalidadController,NivelController)

#bluepring para api rest de ofertas laborales
ofertas = Blueprint('ofertas',__name__,url_prefix='/ofertas')


ofertaController = OfertaLaboralController()


### rutas ###
ofertas.add_url_rule('/',view_func=ofertaController.index,methods=['GET'])
ofertas.add_url_rule('/area',view_func=AreaController().getArea,methods=['GET'])
ofertas.add_url_rule('/modalidad',view_func=ModalidadController().getModalidad,methods=['GET'])
ofertas.add_url_rule('/nivel',view_func=NivelController().getNivel,methods=['GET'])