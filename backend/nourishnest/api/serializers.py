from rest_framework import serializers
from .models import GlobalRecipe

class GlobalRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = GlobalRecipe
        fields = '__all__'
