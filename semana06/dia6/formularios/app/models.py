from django.db import models

# Create your models here.
class Tarea(models.Model):
    descripcion = models.CharField(max_length=200)
    fecha_registro = models.DateTimeField(auto_now=True)
    estado = models.CharField(max_length=100,default='pendiente')