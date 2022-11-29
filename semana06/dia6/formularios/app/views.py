from django.shortcuts import render

# Create your views here.
from .models import Tarea
from .forms import TareaForm

def index(request):
    #obtenemos el listado de tareas
    listaTareas = Tarea.objects.all() #select * from app_tarea
    print(listaTareas)
    
    if request.method == "POST":
        formNuevaTarea = TareaForm(request.POST)
        if formNuevaTarea.is_valid():
            dataTarea = formNuevaTarea.cleaned_data
            
            nuevaTarea = Tarea()
            nuevaTarea.descripcion = dataTarea['descripcion']
            nuevaTarea.save()
            
    
    form_tarea = TareaForm()
    
    context = {
        'lista_tareas':listaTareas,
        'form_tarea':form_tarea
    }
    
    return render(request,'index.html',context)

def tarea(request,tarea_id):
    objetoTarea = Tarea.objects.get(pk=tarea_id) #select * from app_tarea where id = tarea_id
    print(objetoTarea)
    
    context = {
        'objeto_tarea':objetoTarea
    }
    
    return render(request,'tarea.html',context)