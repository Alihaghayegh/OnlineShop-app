from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('items/', views.get_all_items, name='get_all_items'),
    path('items/create/', views.create_item, name='create_item'),
    path('items/<int:pk>/', views.item_element, name='item_element'),
]