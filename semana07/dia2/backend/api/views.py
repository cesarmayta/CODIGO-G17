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