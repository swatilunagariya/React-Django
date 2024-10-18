from django.db import models

class Byer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    phone_number = models.CharField(max_length=15)
    house = models.CharField(max_length=50)

    