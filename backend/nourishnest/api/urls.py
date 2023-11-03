from django.urls import path
from .views import RecipeView

urlpatterns = [
    path('globalrecipes', RecipeView.as_view())
]
