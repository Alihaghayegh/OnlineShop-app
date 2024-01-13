from django.contrib.auth.decorators import login_required
from drf_spectacular.types import OpenApiTypes
from drf_spectacular.utils import extend_schema
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Category
from .seralizers import CategorySerializer


@api_view(['GET'])
def category_collection(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    if request.method == 'GET':
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Get all the categories
@extend_schema(request={'application/x-www-form-urlencoded': OpenApiTypes.OBJECT})
@api_view(['POST'])
def create_category(request):
    if request.method == 'POST':
        data = {'name': request.data.get('name')}
        serializer = CategorySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
