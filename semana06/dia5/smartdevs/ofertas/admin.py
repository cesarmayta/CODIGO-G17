from django.contrib import admin

# Register your models here.
from .models import (
    Area,Modalidad,Nivel,Periodo,Ubicacion,Oferta
)

admin.site.register(Area)
admin.site.register(Modalidad)
admin.site.register(Nivel)
admin.site.register(Periodo)
admin.site.register(Ubicacion)
admin.site.register(Oferta)