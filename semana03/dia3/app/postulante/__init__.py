from flask import Blueprint

postulante = Blueprint('postulante',__name__,url_prefix='/postulante')

from . import views