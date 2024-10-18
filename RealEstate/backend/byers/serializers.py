from rest_framework import serializers
from .models import Byer

class ByerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Byer
        fields = ['name', 'email', 'message', 'phone_number']
