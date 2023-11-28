from rest_framework import serializers

from .models import Item


class ItemSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id',
                  'title',
                  'description',
                  'price',
                  'image',
                  'category',
                  'is_sold',
                  'created',
                  'updated')
