from django.contrib import admin
from .models import GlobalRecipe, UserPersonalInfo

# Register your models here.
admin.site.register(GlobalRecipe)
admin.site.register(UserPersonalInfo)