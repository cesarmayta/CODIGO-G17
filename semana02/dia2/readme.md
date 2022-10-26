#PASOS PARA CREAR UN PROYECTO CON FLASK

1 - CREAR ENTORNO VIRTUAL
     python  -m venv venv

2 - ACTIVAR EL ENTORNO VIRTUAL

    gitbash : source venv/Scripts/activate
    cmd : venv\Scripts\activate
    linux/mac : source venv/bin/activate

3 - INSTALAR FLASK

    pip install flask
    #para verificar que se instalo flask
    pip freeze

4 - CREAR ARCHIVO .gitignore

    venv/

5- CREAR ARCHIVO REQUIREMENTS.txt

    pip freeze > requirements.txt