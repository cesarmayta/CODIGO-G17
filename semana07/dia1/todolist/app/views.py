from django.http import JsonResponse

def index(request):
    context = {
        "mensaje":"Bienvenido a mi API REST con Django"
    }
    
    return JsonResponse(context)