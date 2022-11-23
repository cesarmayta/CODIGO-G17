# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class TblArea(models.Model):
    area_id = models.AutoField(primary_key=True)
    area_descripcion = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'tbl_area'
        
    def __str__(self):
        return self.area_descripcion


class TblModalidad(models.Model):
    modalidad_id = models.AutoField(primary_key=True)
    modalidad_descripcion = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'tbl_modalidad'


class TblNivel(models.Model):
    nivel_id = models.AutoField(primary_key=True)
    nivel_descripcion = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'tbl_nivel'


class TblOferta(models.Model):
    oferta_id = models.AutoField(primary_key=True)
    oferta_titulo = models.CharField(max_length=255)
    oferta_fec_pub = models.DateField()
    oferta_fec_fin = models.DateField()
    oferta_resumen = models.TextField(blank=True, null=True)
    oferta_detalle = models.TextField(blank=True, null=True)
    oferta_estado = models.IntegerField()
    oferta_fecreg = models.DateTimeField()
    ubicacion = models.ForeignKey('TblUbicacion', models.DO_NOTHING)
    modalidad = models.ForeignKey(TblModalidad, models.DO_NOTHING)
    area = models.ForeignKey(TblArea, models.DO_NOTHING)
    periodo = models.ForeignKey('TblPeriodo', models.DO_NOTHING)
    nivel = models.ForeignKey(TblNivel, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_oferta'


class TblOfertaPostulante(models.Model):
    oferta_postulante_id = models.AutoField(primary_key=True)
    oferta_postulante_fecreg = models.DateTimeField()
    oferta_postulante_estado = models.CharField(max_length=1)
    oferta = models.ForeignKey(TblOferta, models.DO_NOTHING)
    postulante = models.ForeignKey('TblPostulante', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_oferta_postulante'


class TblPeriodo(models.Model):
    periodo_id = models.AutoField(primary_key=True)
    periodo_descripcion = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'tbl_periodo'


class TblPostulante(models.Model):
    postulante_id = models.AutoField(primary_key=True)
    postulante_nombres = models.CharField(max_length=255)
    postulante_apellidos = models.CharField(max_length=255)
    postulante_nrodocide = models.CharField(max_length=100)
    postulante_fecnac = models.DateField()
    postulante_genero = models.CharField(max_length=1)
    postulante_estado = models.CharField(max_length=1)
    postulante_fecreg = models.DateTimeField()
    postulante_perfil = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tbl_postulante'


class TblPostulanteContacto(models.Model):
    postulante_contacto_id = models.AutoField(primary_key=True)
    postulante_contacto_valor = models.CharField(max_length=255)
    postulante_contacto_estado = models.CharField(max_length=1)
    postulante_contacto_fecreg = models.DateTimeField()
    tipo_contacto = models.ForeignKey('TblTipoContacto', models.DO_NOTHING)
    postulante = models.ForeignKey(TblPostulante, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_postulante_contacto'


class TblPostulanteEstudio(models.Model):
    postulante_estudio_id = models.AutoField(primary_key=True)
    postulante_estudio_titulo = models.CharField(max_length=255)
    postulante_estudio_institucion = models.CharField(max_length=255)
    postulante_estudio_fecini = models.DateField()
    postulante_estudio_fecfin = models.DateField(blank=True, null=True)
    postulante_estudio_estado = models.CharField(max_length=1)
    postulante_estudio_fecreg = models.DateTimeField()
    tipo_estudio = models.ForeignKey('TblTipoEstudio', models.DO_NOTHING)
    postulante = models.ForeignKey(TblPostulante, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_postulante_estudio'


class TblPostulanteExperiencia(models.Model):
    postulante_experiencia_id = models.AutoField(primary_key=True)
    postulante_experiencia_puesto = models.CharField(max_length=255)
    postulante_experiencia_empresa = models.CharField(max_length=255)
    postulante_experiencia_detalle = models.TextField()
    postulante_experiencia_fecini = models.DateField()
    postulante_experiencia_fecfin = models.DateField(blank=True, null=True)
    postulante_experiencia_estado = models.CharField(max_length=1)
    postulante_experiencia_fecreg = models.DateTimeField()
    postulante = models.ForeignKey(TblPostulante, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_postulante_experiencia'


class TblTipoContacto(models.Model):
    tipo_contacto_id = models.AutoField(primary_key=True)
    tipo_contacto_descripcion = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'tbl_tipo_contacto'


class TblTipoEstudio(models.Model):
    tipo_estudio_id = models.AutoField(primary_key=True)
    tipo_estudio_descripcion = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'tbl_tipo_estudio'


class TblUbicacion(models.Model):
    ubicacion_id = models.AutoField(primary_key=True)
    ubicacion_pais = models.CharField(max_length=255)
    ubicacion_ciudad = models.CharField(max_length=255)
    ubicacion_codigo = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tbl_ubicacion'


class TblUsuario(models.Model):
    usuario_id = models.AutoField(primary_key=True)
    usuario_nombre = models.CharField(max_length=255)
    usuario_password = models.CharField(max_length=255)
    usuario_fecreg = models.DateTimeField()
    usuario_estado = models.CharField(max_length=1)
    postulante = models.ForeignKey(TblPostulante, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'tbl_usuario'
