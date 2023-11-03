from rest_framework import serializers
from .models import GlobalRecipe
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class GlobalRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = GlobalRecipe
        fields = '__all__'

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
    def create(self, data):
        user = User.objects.create_user(data['username'], email=data['email'], password=data['password'])
        user.save()
        return user

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    def check_user(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if not user:
            raise Exception('User not found')
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'username')
