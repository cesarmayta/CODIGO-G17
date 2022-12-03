from rest_framework import generics

from .models import TblArea,TblModalidad,TblNivel,TblOferta,TblUbicacion
from .serializers import AreaSerializer,ModalidadSerializer,NivelSerializer,OfertaSerializer,UbicacionSerializer

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
    queryset = TblModalidad.objects.all()
    serializer_class = ModalidadSerializer
    
class Nivel(generics.ListCreateAPIView):
    queryset = TblNivel.objects.all()
    serializer_class = NivelSerializer
    
class NivelDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TblNivel.objects.all()
    serializer_class = NivelSerializer
    
class Oferta(generics.ListCreateAPIView):
    queryset = TblOferta.objects.all()
    serializer_class = OfertaSerializer
    
class Ubicacion(generics.ListCreateAPIView):
    queryset = TblUbicacion.objects.all()
    serializer_class = UbicacionSerializer
    