# Generated by Django 5.1.1 on 2024-09-22 07:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("realestate", "0003_alter_realestate_bathrooms_alter_realestate_bedrooms"),
    ]

    operations = [
        migrations.CreateModel(
            name="ContactSubmission",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("email", models.EmailField(max_length=254)),
                ("message", models.TextField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.DeleteModel(
            name="Realestate",
        ),
    ]
