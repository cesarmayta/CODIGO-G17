from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework.authentication import TokenAuthentication,SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated


class IndexView(APIView):
    
    authentication_classes = [TokenAuthentication,SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self,request):
        context = {
            'message':'acceso libre'
        }
        return Response(context)

from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
    
class LoginView(APIView):
    
    def post(self,request):
        username = request.data.get("username")
        password = request.data.get("password")
        
        user = authenticate(username=username,password=password)
        
        if user:
            Token.objects.get_or_create(user=user)
            context = {
                'token':user.auth_token.key
            }
        else:
            context = {
                'error':'datos no correctos'
            }
        
        return Response(context)
        
        