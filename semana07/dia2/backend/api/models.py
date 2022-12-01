from django.db import models

# Create your models here.
class Tarea(models.Model):
    
    ESTADO_CHOICES = (
        ('pendiente','Pendiente de realizar'),
        ('completado','Completado y listo')
    )
    
    descripcion = models.CharField(max_length=200)
    fecha_registro = models.DateTimeField(auto_now=True)
    estado = models.CharField(max_length=50,choices=ESTADO_CHOICES)