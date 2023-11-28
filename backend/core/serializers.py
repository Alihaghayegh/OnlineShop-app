from rest_framework import serializers

from .models import Item


class ItemSerilizer(serializers.ModelSerializer):
    model = Item
    fields = ('id',
              'title',
              'description',
              'price',
              'image',
              'created',
              'updated')
