from django.db import models
from django.db.models import UniqueConstraint
from django.contrib.auth.models import User
# Create your models here.

# User Preferences/Personal Info
class UserPersonalInfo(models.Model):
    height = models.DecimalField(max_digits=5, decimal_places=2)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    restrictions = models.JSONField(null=True, editable=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='personal_info')

# Recipe Model:
class GlobalRecipe(models.Model):
    name = models.CharField(max_length=50, null=False, editable=True)
    tags = models.JSONField(editable=True)
    ingredients = models.JSONField(null=False, editable=True)
    calories = models.PositiveSmallIntegerField(editable=True, default=0)
    steps = models.JSONField(null=False, editable=True)

# Saved Recipes
# When Users save a global recipe, a copy will be stored to their saved recipes, which they can make changes to
class SavedRecipe(models.Model):
    name = models.CharField(max_length=50, null=False, editable=True)
    tags = models.JSONField(editable=True)
    ingredients = models.JSONField(null=False, editable=True)
    steps = models.JSONField(null=False, editable=True)
    calories = models.PositiveSmallIntegerField(editable=True, default=0)
    user = models.ForeignKey(User, null=False, db_index=True, on_delete=models.CASCADE)
    

# Weekly Schedule
class Scheduled(models.Model):
    recipe = models.ForeignKey(SavedRecipe, null=True, db_index=True, on_delete=models.CASCADE, editable=True)
    user = models.ForeignKey(User, null=False, db_index=True, on_delete=models.CASCADE)
    date = models.DateField(auto_now=False, auto_now_add=False, null=False, editable=True)
