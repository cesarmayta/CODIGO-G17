from utils.db import ma

class AreaSchema(ma.Schema):
    class Meta:
        fields = ('area_id','area_descripcion')
        
class ModalidadSchema(ma.Schema):
    class Meta:
        fields = ('modalidad_id','modalidad_descripcion')
        
class NivelSchema(ma.Schema):
    class Meta:
        fields = ('nivel_id','nivel_descripcion')
        
class OfertaSchema(ma.Schema):
    class Meta:
        fields = ('oferta_id','oferta_titulo','area_id')

