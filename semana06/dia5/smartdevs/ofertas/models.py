# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Area(models.Model):
    area_id = models.AutoField(primary_key=True)
    area_descripcion = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'tbl_area'
        
    def __str__(self):
        return self.area_descripcion


class Modalidad(models.Model):
    modalidad_id = models.AutoField(primary_key=True)
    modalidad_descripcion = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'tbl_modalidad'
    
    def __str__(self):
        return self.modalidad_descripcion


class Nivel(models.Model):
    nivel_id = models.AutoField(primary_key=True)
    nivel_descripcion = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'tbl_nivel'
        
    def __str__(self):
        return self.nivel_descripcion

class Periodo(models.Model):
    periodo_id = models.AutoField(primary_key=True)
    periodo_descripcion = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'tbl_periodo'
        
    def __str__(self):
        return self.periodo_descripcion

class Ubicacion(models.Model):
    ubicacion_id = models.AutoField(primary_key=True)
    ubicacion_pais = models.CharField(max_length=255)
    ubicacion_ciudad = models.CharField(max_length=255)
    ubicacion_codigo = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tbl_ubicacion'
        
    def __str__(self):
        return self.ubicacion_ciudad
        
class Oferta(models.Model):
    oferta_id = models.AutoField(primary_key=True)
    oferta_titulo = models.CharField(max_length=255)
    oferta_fec_pub = models.DateField()
    oferta_fec_fin = models.DateField()
    oferta_resumen = models.TextField(blank=True, null=True)
    oferta_detalle = models.TextField(blank=True, null=True)
    oferta_estado = models.IntegerField()
    oferta_fecreg = models.DateTimeField()
    ubicacion = models.ForeignKey(Ubicacion, models.DO_NOTHING)
    modalidad = models.ForeignKey(Modalidad, models.DO_NOTHING)
    area = models.ForeignKey(Area, models.DO_NOTHING)
    periodo = models.ForeignKey(Periodo, models.DO_NOTHING)
    nivel = models.ForeignKey(Nivel, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_oferta'

    def __str__(self):
        return self.oferta_titulo




