from utils.db import ma

class AreaSchema(ma.Schema):
    class Meta:
        fields = ('area_id','area_descripcion')

