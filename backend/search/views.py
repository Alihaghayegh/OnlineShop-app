from rest_framework.decorators import api_view
from rest_framework.response import Response

from core.models import Item


@api_view(['GET'])
def search_view(request):
    query = request.query_params.get('q', '')
    results = Item.objects.filter(title__icontains=query)
    data = [{'title': item.title, 'description': item.description} for item in results]
    return Response(data)
