# Generated by Django 3.1 on 2020-08-15 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_project_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='classes',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]