from django.db import models

# Create your models here.
class Tarea(models.Model):
    descripcion = models.CharField(max_length=200)
    fecha_registro = models.DateTimeField(auto_now=True)
    estado = models.CharField(max_length=50,default='pendiente')
    
class Autor(models.Model):
    nombre = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    
    