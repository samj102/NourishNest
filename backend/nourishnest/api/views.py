from django.contrib.auth import get_user_model, login, logout
from .models import GlobalRecipe, UserPersonalInfo, SavedRecipe
from rest_framework import generics, permissions, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *
from django.db.models import Q # For filtering


# Create your views here.
class GlobalRecipeView(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    serializer_class = GlobalRecipeSerializer

    def get_queryset(self):
        queryset = GlobalRecipe.objects.all()

        name = self.request.query_params.get('name', None)
        ingredients = self.request.query_params.get('ingredients', None)
        tags = self.request.query_params.get('tags', None)

        # case insensitive matching
        if name:
            queryset = queryset.filter(name__icontains=name)
        if ingredients:
            queryset = queryset.filter(ingredients__icontains=ingredients)
        if tags:
            queryset = queryset.filter(tags__icontains=tags)

        return queryset

class UserRegister(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            user = serializer.create(request.data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(status=status.HTTP_400_BAD_REQUEST)
        except serializers.ValidationError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)
    def post(self, request):
        serializer = UserLoginSerializer(data = request.data)
        try:
            serializer.is_valid(raise_exception=True)
            user = serializer.check_user(request.data)
            login(request, user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except serializers.ValidationError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class UserLogout(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)

class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    def get(self, request):
        userializer = UserViewSerializer(request.user)
        return Response({'user': userializer.data}, status=status.HTTP_200_OK)
    
class UserPersonalInfoCreate(APIView):
    authentication_classes = (SessionAuthentication,)

    def get(self, request):
        personal_info = UserPersonalInfo.objects.get(user=request.user)
        piserializer = UserPersonalInfoSerializer(personal_info)
        return Response({'info': piserializer.data}, status=status.HTTP_200_OK)
    
    def post(self, request):
        serializer = UserPersonalInfoSerializer(data=request.data, context={'request': request})
        try:
            serializer.is_valid(raise_exception=True)
            personal_info = serializer.create(request.data)
            if personal_info:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                Response(status=status.HTTP_400_BAD_REQUEST)
        except serializers.ValidationError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    

class SavedRecipeView(generics.ListAPIView):
    serializer_class = SavedRecipeSerializer
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get_queryset(self):
        user = self.request.user
        queryset = SavedRecipe.objects.filter(user=user)

        name = self.request.query_params.get('name', None)
        ingredients = self.request.query_params.get('ingredients', None)
        tags = self.request.query_params.get('tags', None)

        # case insensitive matching
        if name:
            queryset = queryset.filter(name__icontains=name)
        if ingredients:
            queryset = queryset.filter(ingredients__icontains=ingredients)
        if tags:
            queryset = queryset.filter(tags__icontains=tags)

        return queryset
    
    
class SavedRecipeCreateView(generics.CreateAPIView):
    serializer_class = SavedRecipeSerializer
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class SavedRecipeDeleteView(generics.DestroyAPIView):
    serializer_class = SavedRecipeSerializer
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    # overrides queryset default method
    def get_queryset(self):
        user = self.request.user
        return SavedRecipe.objects.filter(user=user)

class SavedRecipeUpdateView(generics.UpdateAPIView):
    serializer_class = SavedRecipeSerializer
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    # overrides queryset default method
    def get_queryset(self):
        user = self.request.user
        return SavedRecipe.objects.filter(user=user)
    

class ScheduledCreateView(generics.CreateAPIView):
    serializer_class = ScheduledSerializer
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get_queryset(self):
        user = self.request.user
        return Scheduled.objects.filter(user=user)
    
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid()
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except serializers.ValidationError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class ScheduledView(generics.ListAPIView):
    serializer_class = ScheduledSerializer
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get_queryset(self):
        user = self.request.user
        return Scheduled.objects.filter(user=user)
    
class ScheduledDeleteView(generics.DestroyAPIView):
    serializer_class = ScheduledSerializer
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    # overrides queryset default method
    def get_queryset(self):
        user = self.request.user
        return SavedRecipe.objects.filter(user=user)

class ScheduledUpdateView(generics.UpdateAPIView):
    serializer_class = ScheduledSerializer
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    # overrides queryset default method
    def get_queryset(self):
        user = self.request.user
        return Scheduled.objects.filter(user=user)