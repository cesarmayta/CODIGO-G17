from rest_framework import serializers
from .models import (
    TblArea,TblModalidad,
    TblNivel,TblOferta,
    TblUbicacion,TblPostulante,
    TblOfertaPostulante
    )

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblArea
        fields = '__all__'
        
class ModalidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblModalidad
        fields = '__all__'

class NivelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblNivel
        fields = '__all__'
        
class UbicacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblUbicacion
        fields = '__all__'
        
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        return representation
        
class PostulanteSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblPostulante
        fields = '__all__'
        
class OfertaPostulanteSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblOfertaPostulante
        fields = '__all__'
        
    def to_representation(self,instance):
        serPostulante = PostulanteSerializer(instance.postulante)
        representation = super().to_representation(instance)
        representation['postulante'] = serPostulante.data
        return representation
    
class OfertaSerializer(serializers.ModelSerializer):
    postulantes = OfertaPostulanteSerializer(many=True,read_only=True)
    
    class Meta:
        model = TblOferta
        fields = '__all__'
        
    def to_representation(self,instance):
        
        serUbicacion = UbicacionSerializer(instance.ubicacion)
        
        representation = super().to_representation(instance)
        representation['area'] = instance.area.area_descripcion
        representation['modalidad'] = instance.modalidad.modalidad_descripcion
        representation['nivel'] = instance.nivel.nivel_descripcion
        representation['periodo'] = instance.periodo.periodo_descripcion
        representation['ubicacion'] = serUbicacion.data
        return representation