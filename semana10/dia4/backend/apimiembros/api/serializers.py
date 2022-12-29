from rest_framework import serializers
from .models import *

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'
        
class CursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curso
        fields = '__all__'
        
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['curso_imagen'] = instance.curso_imagen.url
        #categoria
        categoria = Categoria.objects.get(pk=instance.categoria_id.categoria_id)
        representation['categoria_nombre'] = categoria.categoria_nombre
        #profesor
        profesor = Miembro.objects.get(pk=instance.profesor_id.miembro_id)
        representation['profesor_nombre'] = profesor.usuario_id.first_name + ' ' + profesor.usuario_id.last_name
        return representation
        
class MiembroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Miembro
        fields = '__all__'