from django.contrib import admin

# Register your models here.
from .models import Categoria,Marca,Producto,Atributo,ProductoPrecio

admin.site.register(Categoria)
admin.site.register(Producto)
admin.site.register(Marca)
admin.site.register(Atributo)
admin.site.register(ProductoPrecio)