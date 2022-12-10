from django.db import models

# Create your models here.
class Categoria(models.Model):
    nombre = models.CharField(max_length=200)
    
    def __str__(self):
        return self.nombre
    
class Marca(models.Model):
    nombre = models.CharField(max_length=200)
    
    def __str__(self):
        return self.nombre
    
class Producto(models.Model):
    categoria = models.ForeignKey(Categoria,on_delete=models.RESTRICT)
    marca = models.ForeignKey(Marca,on_delete=models.RESTRICT)
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(null=True)
    precio = models.DecimalField(max_digits=9,decimal_places=2)
    imagen = models.ImageField(upload_to='productos',blank=True)
    
    def __str__(self):
        return self.nombre
    