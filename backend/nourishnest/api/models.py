from django.db import models
from django.db.models import UniqueConstraint
from django.contrib.auth.models import User
# Create your models here.

# Recipe Model:
class GlobalRecipe(models.Model):
    name = models.CharField(max_length=50, null=False, editable=True)
    cuisine = models.CharField(max_length=50, null=False, editable=True)
    ingredients = models.TextField(editable=True)
    steps = models.TextField(editable=True)

# Saved Recipes
# When Users save a global recipe, a copy will be stored to their saved recipes, which they can make changes to
class SavedRecipe(models.Model):
    name = models.CharField(max_length=50, null=False, editable=True)
    cuisine = models.CharField(max_length=50, null=False, editable=True)
    ingredients = models.TextField(editable=True)
    steps = models.TextField(editable=True)
    user = models.ForeignKey(User, null=False, db_index=True, on_delete=models.CASCADE)
    

#Weekly Schedule
class Scheduled(models.Model):
    recipe = models.ForeignKey(SavedRecipe, null=True, db_index=True, on_delete=models.CASCADE, editable=True)
    user = models.ForeignKey(User, null=False, db_index=True, on_delete=models.CASCADE)
    day = models.CharField(null=False, max_length=9, editable=True)
    meal = models.CharField(null=False, max_length=10, editable=True)
    class Meta:
        UniqueConstraint('user', 'day', 'meal', name="unique_user_scheduled_meal")
