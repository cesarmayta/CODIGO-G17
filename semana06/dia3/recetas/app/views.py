from django.shortcuts import render

from .models import Autor,Receta,Comentario

# Create your views here.
def index(request):
    listaRecetas = Receta.objects.all()
    
    listaAutores = Autor.objects.all()
    
    titulo = 'PORTAL DE RECETAS'
    
    context = {
        'recetas':listaRecetas,
        'autores':listaAutores,
        'titulo':titulo
    }
    return render(request,'index.html',context)

def receta(request,recetaId):
    objReceta = Receta.objects.get(pk=recetaId)
    
    context = {
        'receta':objReceta
    }
    
    return render(request,'receta.html',context)
    