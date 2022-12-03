from rest_framework import generics

from .models import TblArea,TblModalidad
from .serializers import AreaSerializer,ModalidadSerializer

class Area(generics.ListCreateAPIView):
    queryset = TblArea.objects.all()
    serializer_class = AreaSerializer
    
class AreaDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AreaSerializer
    queryset = TblArea.objects.all()
    
class Modalidad(generics.ListCreateAPIView):
    queryset = TblModalidad.objects.all()
    serializer_class = ModalidadSerializer
    
class ModalidadDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ModalidadSerializer
    queryset = TblModalidad.objects.all()