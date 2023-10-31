from django.db import models
from django.db.models import UniqueConstraint
from django.db.models.functions import Lower

# Create your models here.

# User Model


#Weekly Schedule

# Saved Recipes


# Recipe Models:
class Recipe(models.Model):
    name = models.CharField(max_length=50, null=False, editable=True)
    cuisine = models.CharField(max_length=50, null=True, editable=True)


class Ingredient(models.Model):
    name = models.CharField(max_length=50, null=False, editable=True)
    quantity = models.PositiveSmallIntegerField() # max 32767
    recipe = models.ForeignKey(Recipe, db_index=True, on_delete=models.CASCADE)
    
    class Meta:
        constraints = [
            models.UniqueConstraint('name', 'recipe', name='ingredient_recipe_unique')
        ]

class RecipeStep(models.Model):
    step = models.CharField(max_length=100, null=False, editable=True)
    step_number = models.PositiveSmallIntegerField() # max 32767
    recipe = models.ForeignKey(Recipe, db_index=True, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint('step_number', 'recipe', name='order_recipe_unique')
        ]