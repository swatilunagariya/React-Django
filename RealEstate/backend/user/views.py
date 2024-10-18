from django.shortcuts import render
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Users
from django.core import serializers
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        passward = data.get('password')
        Users.objects.create(username=name,email=email,password=passward)
        return JsonResponse(data)
    return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=400)

@csrf_exempt
def login(request):
    if request.method=='POST':
        data = json.loads(request.body)
        print(data)
        email1 = data.get('email')
        passward1 = data.get('password')
        print(email1)
        print(passward1)
        e1= serializers.serialize('json', Users.objects.filter(email=email1,password=passward1))
        print(e1)
        if e1 is not None:
            return JsonResponse(e1,safe=False)
        else:
            return JsonResponse(e1,safe=False)
    return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=400)

def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})

