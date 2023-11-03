from django.db import models
from django.db.models import UniqueConstraint
from django.contrib.auth.models import User
# Create your models here.

# Recipe Model:
class Recipe(models.Model):
    name = models.CharField(max_length=50, null=False, editable=True)
    cuisine = models.CharField(max_length=50, null=False, editable=True)
    ingredients = models.TextField()
    steps = models.TextField()
    usercreated = models.BooleanField(null=False, default = False)

# Saved Recipes
class SavedRecipes(models.Model):
    recipe = models.ForeignKey(Recipe, null=False, db_index=True, on_delete=models.CASCADE)
    user = models.ForeignKey(User, null=False, db_index=True, on_delete=models.CASCADE)
    class Meta:
        UniqueConstraint('recipe', 'user', name="unique_user_saved_recipe")

#Weekly Schedule
class Scheduled(models.Model):
    recipe = models.ForeignKey(Recipe, null=True, db_index=True, on_delete=models.CASCADE, editable=True)
    user = models.ForeignKey(User, null=False, db_index=True, on_delete=models.CASCADE)
    day = models.CharField(null=False, max_length=9)
    meal = models.CharField(null=False, max_length=10)
    class Meta:
        UniqueConstraint('user', 'day', 'meal', name="unique_user_scheduled_meal")
