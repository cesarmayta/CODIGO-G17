from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics

from .models import *
from .serializers import *

class CategoriaView(generics.ListAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    
class CursoView(generics.ListAPIView):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
    
