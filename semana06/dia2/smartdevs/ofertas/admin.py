from django.contrib import admin

# Register your models here.
from .models import (TblArea,
                     TblModalidad,
                     TblNivel,
                     TblPeriodo,
                     TblUbicacion,
                     TblOferta)

admin.site.register(TblArea)
admin.site.register(TblModalidad)
admin.site.register(TblNivel)
admin.site.register(TblPeriodo)
admin.site.register(TblUbicacion)

@admin.register(TblOferta)
class Oferta(admin.ModelAdmin):
    list_display = ('oferta_id','oferta_titulo','oferta_fec_pub','ubicacion','periodo','area','nivel','modalidad')
    search_fields = ('oferta_titulo',)

