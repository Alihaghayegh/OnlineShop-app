# Generated by Django 5.0 on 2024-01-11 17:02

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0001_initial'),
        ('core', '0006_alter_category_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='items', to='category.category'),
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]
