from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import ContactSubmission

@api_view(['POST'])
def contact_form_submission(request):
    data = request.data
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if not name or not email or not message:
        return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

    # Save form data in the database
    submission = ContactSubmission.objects.create(
        name=name,
        email=email,
        message=message
    )

    return Response({'success': 'Message received successfully!'}, status=status.HTTP_200_OK)
