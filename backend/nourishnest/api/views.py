from django.shortcuts import render
from .models import Recipe
from rest_framework import generics
from .serializers import RecipeSerializer
from django.db.models import Q


# Create your views here.
class RecipeView(generics.ListAPIView):
    queryset = Recipe.objects.filter(Q(usercreated=False))
    serializer_class = RecipeSerializer