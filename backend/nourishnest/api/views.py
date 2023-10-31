from django.shortcuts import render
from .models import Recipe
from rest_framework import generics
from .serializers import RecipeSerializer

# Create your views here.
class RecipeView(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
