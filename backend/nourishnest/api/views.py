from django.contrib.auth import get_user_model, login, logout
from .models import GlobalRecipe, UserPersonalInfo
from rest_framework import generics, permissions, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import GlobalRecipeSerializer, UserRegisterSerializer, UserLoginSerializer, UserViewSerializer, UserPersonalInfoSerializer
from django.db.models import Q # For filtering


# Create your views here.
class GlobalRecipeView(generics.ListAPIView):
    queryset = GlobalRecipe.objects.all()
    serializer_class = GlobalRecipeSerializer

class UserRegister(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(request.data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)
    def post(self, request):
        serializer = UserLoginSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(request.data)
            login(request, user)
            return Response(serializer.data, status=status.HTTP_200_OK)


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
        if serializer.is_valid(raise_exception=True):
            personal_info = serializer.create(request.data)
            if personal_info:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
