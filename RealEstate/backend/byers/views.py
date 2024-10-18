from django.http import JsonResponse
from .models import Byer
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt  # Use only for testing; consider CSRF tokens for production
def create_buyer(request):
    if request.method == 'POST':
        try:
            # Extract form data from the request
            name = request.POST.get('name')
            email = request.POST.get('email')
            message = request.POST.get('message')
            phone_number = request.POST.get('phone_number')
            house_name = request.POST.get('house')

            # Validate data
            errors = {}
            if not name:
                errors['name'] = 'Name field is required'
            if not email:
                errors['email'] = 'Email field is required'
            if not phone_number:
                errors['phone_number'] = 'Phone number field is required'
            
            if errors:
                return JsonResponse({'errors': errors}, status=400)

            # Create a new Byer instance and save it to the database
            byer = Byer(name=name, email=email, message=message, phone_number=phone_number, house=house_name)
            byer.save()

            return JsonResponse({'message': 'Buyer created successfully'}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
