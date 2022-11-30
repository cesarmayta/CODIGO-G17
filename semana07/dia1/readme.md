#pasos para migracion de modelos

1 - crear la migración
    python manage.py makemigrations

2 - migrar a la base de datos
    python manage.py migrate

3 - crear el super usuario
    python manage.py createsuperuser


## pasos para utilzar django rest framework DRF
1- instalación
    pip install djangorestframework

2 - instalar el app en setting

    'rest_framework',