from rest_framework import serializers
from .models import GlobalRecipe, UserPersonalInfo, SavedRecipe, Scheduled
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


class UserPersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPersonalInfo
        fields = ('height', 'weight', 'restrictions')
    
    def create(self, data):
        user = self.context['request'].user
        info = UserPersonalInfo.objects.create(user=user, **data)
        info.save()
        return info

class UserPersonalInfoUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPersonalInfo
        fields = ('height', 'weight', 'restrictions')

class UserViewSerializer(serializers.ModelSerializer):
    personal_info = UserPersonalInfoSerializer()
    class Meta:
        model = User
        fields = ('id','email', 'username', 'personal_info')

class CreateSavedRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavedRecipe
        fields = '__all__'

    def create(self, data):
        user = self.context['request'].user
        saved_recipe = SavedRecipe.objects.create(user=user, **data)
        saved_recipe.save()
        return saved_recipe
    
class SavedRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavedRecipe
        fields = ('id', 'name', 'tags', 'ingredients', 'steps', 'calories', 'image')
        read_only_fields = ('user',)
    
class SavedRecipeUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavedRecipe
        fields = ('name', 'tags', 'ingredients', 'steps', 'calories', 'image')

class ScheduledSerializer(serializers.ModelSerializer):
    recipe = SavedRecipeSerializer()
    class Meta:
        model = Scheduled
        fields = ['id', 'recipe', 'user', 'date']

    def validate_recipe(self, value):
        try:
            SavedRecipe.objects.get(pk=value)
        except SavedRecipe.DoesNotExist:
            raise serializers.ValidationError("Invalid saved recipe ID. Recipe does not exist.")
        return value
