from rest_framework import serializers

from .models import Item
from category.seralizers import CategorySerializer
from users.serializers import CustomUserSerializer


class ItemSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    created_by = CustomUserSerializer()

    class Meta:
        model = Item
        fields = ('id',
                  'title',
                  'description',
                  'price',
                  'image',
                  'is_sold',
                  'category',
                  'created_by',
                  'created',
                  'updated')
