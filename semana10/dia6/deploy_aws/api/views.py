from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from web.models import (Categoria
,Marca,Producto)

from .serializers import (
    CategoriaSerializer,MarcaSerializer
    ,ProductoSerializer)

@api_view(['GET'])
def index(request):
    context = {
        'status':True,
        'content':'Api rest de shop'
    }
    return Response(context)

@api_view(['GET'])
def categoria(request):
    dataCategoria = Categoria.objects.all()
    serCategoria = CategoriaSerializer(dataCategoria,many=True)

    context = {
        'status':True,
        'content':serCategoria.data
    }

    return Response(context,status=status.HTTP_200_OK)

@api_view(['GET'])
def marca(request):
    data = Marca.objects.all()
    serData = MarcaSerializer(data,many=True)

    context = {
        'status':True,
        'content':serData.data
    }

    return Response(context,status=status.HTTP_200_OK)

@api_view(['GET'])
def producto(request):
    data = Producto.objects.all()
    serData = ProductoSerializer(data,many=True)

    context = {
        'status':True,
        'content':serData.data
    }

    return Response(context,status=status.HTTP_200_OK)