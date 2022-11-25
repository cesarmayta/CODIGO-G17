from django.shortcuts import render

# Create your views here.
############## VISTAS PARA OFERTAS LABORALES ###############
def index(request):
    return render(request,'index.html')