from django.shortcuts import render
from .models import GlobalRecipe
from rest_framework import generics
from .serializers import GlobalRecipeSerializer
from django.db.models import Q


# Create your views here.
class GlobalRecipeView(generics.ListAPIView):
    queryset = GlobalRecipe.objects.all()
    serializer_class = GlobalRecipeSerializer