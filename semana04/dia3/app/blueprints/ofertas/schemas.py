from utils.db import ma

class AreaSchema(ma.Schema):
    class Meta:
        fields = ('area_id','area_descripcion')
        
class ModalidadSchema(ma.Schema):
    class Meta:
        fields = ('modalidad_id','modalidad_descripcion')

