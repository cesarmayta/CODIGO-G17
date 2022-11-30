from django.http import JsonResponse

from .models import Tarea


def index(request):
    listaTareas = Tarea.objects.all()
    print(listaTareas)
    #serialización de datos
    listaDatos = []
    for tarea in listaTareas:
        dicTarea = {
            'id':tarea.id,
            'descripcion':tarea.descripcion,
            'fecha_registro':tarea.fecha_registro,
            'estado':tarea.estado
        }
        listaDatos.append(dicTarea)
        
    print(listaDatos)
    context = {
        "status":True,
        "content":listaDatos
    }
    
    return JsonResponse(context)