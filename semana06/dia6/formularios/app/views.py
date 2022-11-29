from django.shortcuts import render

# Create your views here.
from .models import Tarea

def index(request):
    #obtenemos el listado de tareas
    listaTareas = Tarea.objects.all() #select * from app_tarea
    print(listaTareas)
    
    context = {
        'lista_tareas':listaTareas
    }
    
    return render(request,'index.html',context)

def tarea(request,tarea_id):
    objetoTarea = Tarea.objects.get(pk=tarea_id) #select * from app_tarea where id = tarea_id
    print(objetoTarea)
    
    context = {
        'objeto_tarea':objetoTarea
    }
    
    return render(request,'tarea.html',context)