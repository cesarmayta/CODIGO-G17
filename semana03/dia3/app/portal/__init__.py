from flask import Blueprint

portal = Blueprint('portal',__name__,url_prefix='/')

from . import views