from django.urls import path
from .views import GlobalRecipeView, UserRegister, UserLogin, UserLogout, UserView, UserPersonalInfoCreate

urlpatterns = [
    path('register', UserRegister.as_view()),
    path('login', UserLogin.as_view()),
    path('logout', UserLogout.as_view()),
    path('user', UserView.as_view()),
    path('personalinfo', UserPersonalInfoCreate.as_view()),
    path('globalrecipes', GlobalRecipeView.as_view())
]
