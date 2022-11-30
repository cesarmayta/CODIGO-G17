from rest_framework import serializers

from .models import Tarea

class TareaSerializer(serializers.Serializer):
    #id = serializers.IntegerField()
    descripcion = serializers.CharField()
    fecha_registro = serializers.DateTimeField()
    estado = serializers.CharField()
    
    def create(self,validated_data):
        return Tarea.objects.create(**validated_data)