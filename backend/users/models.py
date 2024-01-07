from django.db import models
from django.contrib.auth.models import User


class CustomUser(User):
    bio = models.TextField(max_length=255, null=True)
