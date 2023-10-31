from django.urls import path
from .views import RecipeView

urlpatterns = [
    path('allrecipes', RecipeView.as_view())
]
