from rest_framework import serializers
from .models import TblArea

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblArea
        fields = '__all__'