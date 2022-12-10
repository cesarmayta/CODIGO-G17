from django.contrib import admin

# Register your models here.
from .models import Categoria,Marca,Producto

admin.site.register(Categoria)
admin.site.register(Producto)
admin.site.register(Marca)