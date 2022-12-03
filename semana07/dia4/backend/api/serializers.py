from rest_framework import serializers
from .models import TblArea,TblModalidad,TblNivel,TblOferta

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
        
class OfertaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblOferta
        fields = '__all__'
        
    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['area'] = instance.area.area_descripcion
        representation['ciudad'] = instance.ubicacion.ubicacion_ciudad
        representation['modalidad'] = instance.modalidad.modalidad_descripcion
        representation['nivel'] = instance.nivel.nivel_descripcion
        representation['pais'] = instance.ubicacion.ubicacion_pais
        representation['periodo'] = instance.periodo.periodo_descripcion
        return representation