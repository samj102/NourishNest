from django.urls import path
from .views import GlobalRecipeView

urlpatterns = [
    path('globalrecipes', GlobalRecipeView.as_view())
]
