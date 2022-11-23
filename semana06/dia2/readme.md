1 - python -m venv venv
2 - source venv/scripts/activate
3 - pip install django
4 - django-admin startproject smartdevs
5 - cd smartdevs
6 - python manage.py startapp ofertas
7 - registrar el app en el proyecto
settings.py
INSTALLED_APPS = [
    'ofertas',

8- configurar base de datos

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'db_smartdevs_django',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}
9 - pip install mysqlclient
10 - python manage.py inspectdb > ofertas/models.py
11 - python manage.py migrate
12 - python manage.py createsuperuser
13 - python manage.py runserver

