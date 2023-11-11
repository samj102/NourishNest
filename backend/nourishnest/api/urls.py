from django.urls import path
from .views import *

urlpatterns = [
    path('register', UserRegister.as_view()),
    path('login', UserLogin.as_view()),
    path('logout', UserLogout.as_view()),
    path('user', UserView.as_view()),
    path('personalinfo', UserPersonalInfoCreate.as_view()),
    path('globalrecipes', GlobalRecipeView.as_view()),
    path('savedrecipes', SavedRecipeView.as_view()),
    path('savedrecipes/create', SavedRecipeCreateView.as_view()),
    path('savedrecipes/<int:pk>/delete', SavedRecipeDeleteView.as_view()), # <int:pk> is for id primary key of the saved recipe
    path('savedrecipes/<int:pk>/update', SavedRecipeUpdateView.as_view()),
    path('scheduled', ScheduledView.as_view()),
    path('scheduled/create', ScheduledCreateView.as_view()),
    path('scheduled/<int:pk>/delete', ScheduledDeleteView.as_view()),
    path('scheduled/<int:pk>/update', ScheduledUpdateView.as_view())
]
