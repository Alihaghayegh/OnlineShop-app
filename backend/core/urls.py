from django.urls import path

from . import views

app_name = 'core'

urlpatterns = [
    path('items/', views.item_collection, name='item_collection'),
    path('item/<int:pk>/', views.item_element, name='item_element'),
]