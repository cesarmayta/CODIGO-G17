from rest_framework import serializers
from .models import TblArea,TblModalidad

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblArea
        fields = '__all__'
        
class ModalidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblModalidad
        fields = '__all__'