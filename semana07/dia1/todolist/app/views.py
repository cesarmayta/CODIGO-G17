from django.http import JsonResponse

#DRF
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


from .models import Tarea
from .serializers import TareaSerializer

@api_view(['GET'])
def index(request):
    listaTareas = Tarea.objects.all()
    print(listaTareas)
    #serialización de datos
    """listaDatos = []
    for tarea in listaTareas:
        dicTarea = {
            'id':tarea.id,
            'descripcion':tarea.descripcion,
            'fecha_registro':tarea.fecha_registro,
            'estado':tarea.estado
        }
        listaDatos.append(dicTarea)
    """
    listaDatos = TareaSerializer(listaTareas,many=True)
    print(listaDatos.data)
    context = {
        "status":True,
        "content":listaDatos.data
    }
    
    return Response(context)

@api_view(['POST'])
def setTarea(request):
    serData = TareaSerializer(data=request.data)
    
    if serData.is_valid():
        serData.save()
        context= {
            'status':True,
            'content':serData.data
        }
        return Response(context)
    else:
        return Response(serData.errors,status=status.HTTP_400_BAD_REQUEST)