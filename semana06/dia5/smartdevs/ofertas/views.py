from django.shortcuts import render

from .models import (
    Area,Modalidad,Nivel,Periodo,Ubicacion,Oferta
)

from .forms import PostulanteForm

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

def ofertasPorArea(request,area_id):
    objArea = Area.objects.get(pk=area_id)
    listaOfertas = Oferta.objects.filter(area=objArea)
    listaAreas = Area.objects.all()
    
    context = {
        "areas":listaAreas,
        "ofertas":listaOfertas
    }
    
    return render(request,'index.html',context)

def ofertaPorTitulo(request):
    titulo = request.POST['titulo']
    print('valor de busqueda : ' + titulo)
    
    #select * from oferta where titulo like '%titulo%'
    listaOfertas = Oferta.objects.filter(oferta_titulo__icontains = titulo.lower())
    listaAreas = Area.objects.all()
    
    context = {
        "areas":listaAreas,
        "ofertas":listaOfertas
    }
    
    return render(request,'index.html',context)

def ofertaDetalle(request,oferta_id):
    objOferta = Oferta.objects.get(pk=oferta_id) #select * from oferta where id=oferta_id
    
    context = {
        "oferta":objOferta
    }
    
    return render(request,'oferta.html',context)

def postulanteOferta(request,oferta_id):
    objOferta = Oferta.objects.get(pk=oferta_id)
    
    frmPostulante = PostulanteForm()
    
    context = {
        "oferta":objOferta,
        "form":frmPostulante
    }
    
    return render(request,'postulante.html',context)
    
    