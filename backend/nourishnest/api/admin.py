from django.contrib import admin
from .models import GlobalRecipe, UserPersonalInfo, SavedRecipe

# Register your models here.
admin.site.register(GlobalRecipe)
admin.site.register(UserPersonalInfo)
admin.site.register(SavedRecipe)