from django.urls import path

from . import views

app_name = 'category'

urlpatterns = [
    path('category/', views.category_collection, name='category_collection'),
]