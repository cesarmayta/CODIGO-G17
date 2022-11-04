#PROYECTO WEB CON FLASK

#PASOS PARA DESPLIEGUE

PASO 1 - CREAR ENTORNO VIRTUAL

python -m venv venv

source venv/scripts/activate

PASO 2 - CREAR ARCHIVO .gitignore

https://www.toptal.com/developers/gitignore/api/flask

PASO 3 - CREAR ARCHIVO requirements.txt

#framework principal
flask

#extensiones de flask
flask-mysql

#otras librerias

PASO 4 - INSTALAR DEPENDENCIAS

pip install -r requirements.txt


#PARA DESPLEGAR APLICACIÓN CON FLASK

export FLASK_APP=run.py
export FLASK_DEBUG=1

flask run