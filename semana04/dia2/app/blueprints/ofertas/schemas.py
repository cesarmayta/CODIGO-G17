from flask import g

ma = g.ma

class AreaSchema(ma.Schema):
    class Meta:
        fields = ('id','descripcion')

