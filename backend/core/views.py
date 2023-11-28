from rest_framework.decorators import api_view
from rest_framework import status
from .models import Item
from .serializers import ItemSerilizer

@api_view(["GET"])
def get_all_items():
    pass
