from django.urls import path

from . import views

app_name = 'category'

urlpatterns = [
    path('category/', views.category_collection, name='category_collection'),
    path('category/create', views.create_category, name='create_category'),
]