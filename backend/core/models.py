from django.db import models

from category.models import Category

class Item(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
    image = models.ImageField(upload_to='item_images', blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, related_name='items')
    is_sold = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


    class Meta:
        ordering = ['created']
        verbose_name_plural = "item"
