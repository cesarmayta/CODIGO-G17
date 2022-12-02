from rest_framework import generics

from .models import TblArea
from .serializers import AreaSerializer

class Area(generics.ListCreateAPIView):
    queryset = TblArea.objects.all()
    serializer_class = AreaSerializer