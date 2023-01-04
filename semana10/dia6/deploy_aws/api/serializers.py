from rest_framework import serializers

from web.models import (
    Categoria,Marca,Producto
)

class CategoriaSerializer(serializers.ModelSerializer):
    class  Meta:
        model = Categoria
        fields = ['id','nombre']

class MarcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marca
        fields = ['id','nombre']

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

