from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Item, Category
from .serializers import ItemSerilizer, CategorySerializer


# Get all the categories
@api_view(['GET', 'POST'])
def category_collection(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = {'category': request.data.get('category')}
        serializer = CategorySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Get all the items
@api_view(['GET', 'POST'])
def item_collection(request):
    if request.method == 'GET':
        items = Item.objects.all()
        serializer = ItemSerilizer(items, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = {'title': request.data.get('title'),
                'description': request.data.get('description'),
                'price': request.data.get('price'),
                'image': request.data.get('image'),
                'category': request.data.get('category'),
                }
        serializer = ItemSerilizer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Get one item by primary key
@api_view(['GET', 'PUT', 'DELETE'])
def item_element(request, pk):
    try:
        item = Item.objects.get(pk=pk)
    except Item.DoesNotExist:
        return HttpResponse(status=404)
    
    if request.method == 'GET':
        serializer = ItemSerilizer(item)
        return Response(serializer.data)
    
    if request.method == 'PUT':
        serializer = ItemSerilizer(item, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
