#PROYECTO WEB CON FLASK

#PASOS PARA DESPLIEGUE

PASO 1 - CREAR ENTORNO VIRTUAL

python -m venv venv

source venv/scripts/activate

PASO 2 - INSTALAR DEPENDENCIAS

pip install -r requirements.txt

PASO 3 - VARIABLES DE ENTORNO Y DESPLIEGUE

export FLASK_APP=run.py
export FLASK_DEBUG=1

flask run