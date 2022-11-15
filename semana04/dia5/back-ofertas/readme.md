#PASOS PARA DESPLIEGUE DE APP

1 - CREAR ENTORNO VIRTUAL

python -m venv venv

2 - ACTIVAR ENTORNO VIRTUAL

source venv/Scripts/activate

3 - INSTALAR DEPENDENCIAS

pip install -r requirements.txt

4 - CREAR ARCHIVO .env

FLASK_APP=run.py
FLASK_DEBUG=1

5 - desplegar con flask run
