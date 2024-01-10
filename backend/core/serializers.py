from rest_framework import serializers

from .models import Item
from category.seralizers import CategorySerializer
from category.models import Category


class ItemSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id',
                  'title',
                  'description',
                  'price',
                  'image',
                  'is_sold',
                  'category',
                  'created',
                  'updated')
