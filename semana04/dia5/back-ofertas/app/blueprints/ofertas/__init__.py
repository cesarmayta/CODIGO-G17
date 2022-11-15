from flask import Blueprint

from .controllers import (OfertaController,AreaController,
 ModalidadController,NivelController)

#bluepring para api rest de ofertas laborales
ofertas = Blueprint('ofertas',__name__,url_prefix='/ofertas')


### rutas ###
ofertas.add_url_rule('/',view_func=OfertaController().getOferta,methods=['GET'])
##### RUTAS DE AREA ##############
ofertas.add_url_rule('/area',view_func=AreaController().getAll,methods=['GET'])
ofertas.add_url_rule('/area/<int:id>',view_func=AreaController().getById,methods=['GET'])
ofertas.add_url_rule('/area/busqueda/<string:descripcion>',view_func=AreaController().getByDesc,methods=['GET'])
##### RUTAS DE MODALIDAD #############
ofertas.add_url_rule('/modalidad',view_func=ModalidadController().getModalidad,methods=['GET'])
ofertas.add_url_rule('/nivel',view_func=NivelController().getNivel,methods=['GET'])
ofertas.add_url_rule('/nivel/<int:id>',view_func=NivelController().getNivelById,methods=['GET'])