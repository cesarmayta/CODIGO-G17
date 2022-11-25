from django.shortcuts import render

from .models import (
    Area,Modalidad,Nivel,Periodo,Ubicacion,Oferta
)

# Create your views here.
############## VISTAS PARA OFERTAS LABORALES ###############
def index(request):
    listaOfertas = Oferta.objects.all()
    listaAreas = Area.objects.all()
    listaUbicacion = Ubicacion.objects.all()
    listaPeriodos = Periodo.objects.all()
    listaNiveles = Nivel.objects.all()
    listaModalidades = Modalidad.objects.all()
    
    context = {
        "ofertas":listaOfertas,
        "areas":listaAreas,
        "ubicaciones":listaUbicacion,
        "periodos":listaPeriodos,
        "niveles":listaNiveles,
        "modalidades":listaModalidades
    }
    return render(request,'index.html',context)