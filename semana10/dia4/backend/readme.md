#COMANDOS A EJECUTAR PARA DJANGO
1 - python -m venv venv
2 - source venv/scripts/Activate
3 - pip install -r requirements.txt
4 - django-admin startproject apimiembros
5 - cd apimiembros
6 - python manage.py startapp api
7 - python manage.py runserver

despues de crear los modelos
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
