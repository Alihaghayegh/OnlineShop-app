from django.urls import path

from . import views

app_name = 'users'

urlpatterns = [
    path('users/', views.user_list, name='user_list'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('test-token/', views.test_token, name='test_tokent'),
]