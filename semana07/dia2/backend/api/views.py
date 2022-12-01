from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Tarea
from .serializers import TareaSerializer

class IndexView(APIView):
    
    def get(self,request):
        context = {
            'status':True,
            'content':'servidor activo'
        }
        return Response(context)
    
class TareasView(APIView):
    
    def get(self,request):
        data = Tarea.objects.all()
        serData = TareaSerializer(data,many=True)
        return Response(serData.data)
    
    def post(self,request):
        serData = TareaSerializer(data=request.data)
        serData.is_valid(raise_exception=True)
        serData.save()
        
        return Response(serData.data) 
    
#para put y delete
class TareaDetailView(APIView):
    
    def get(self,request,tarea_id):
        dataTarea = Tarea.objects.get(pk=tarea_id)
        serTarea = TareaSerializer(dataTarea)
        
        return Response(serTarea.data)
    
    def put(self,request,tarea_id):
        dataTarea = Tarea.objects.get(pk=tarea_id)
        serTarea = TareaSerializer(dataTarea,data=request.data)
        serTarea.is_valid(raise_exception=True)
        serTarea.save()
        
        return Response(serTarea.data)