from rest_framework import serializers

from .models import Item
from category.seralizers import CategorySerializer


class ItemSerilizer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

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
