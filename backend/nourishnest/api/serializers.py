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
            raise serializers.ValidationError('User not found or Password is invalid')

        return user

    def to_representation(self, data):
        ret = super(UserLoginSerializer, self).to_representation(data)
        ret['is_staff'] = data.is_staff
        return ret


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

class SavedRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = SavedRecipe
        fields = ('id', 'name', 'tags', 'ingredients', 'steps', 'calories', 'preptime', 'cooktime', 'image')
        read_only_fields = ('user',)


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
