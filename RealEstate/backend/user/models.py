from django.db import models

class Users(models.Model):
    username=models.CharField(max_length=100)
    email=models.EmailField(max_length=200)
    password=models.CharField(max_length=20)
    