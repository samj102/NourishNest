from rest_framework import serializers
from .models import Recipe, Ingredient, RecipeStep
'''
class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'

class RecipeStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeStep
        fields = '__all__'
'''
class RecipeSerializer(serializers.ModelSerializer):
    #recipe_ingredients = IngredientSerializer(many=True)
    #recipe_steps = RecipeStepSerializer(many=True)

    class Meta:
        model = Recipe
        fields = '__all__'
