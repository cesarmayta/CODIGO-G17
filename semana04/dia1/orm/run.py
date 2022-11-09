from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/db_api'
app.app_context().push()
#configuramos sql alchemy
db = SQLAlchemy(app)
print("estas conectado a la base de datos")

#creamos una clase que represente a la una tabla
class Alumno(db.Model):
    id = db.Column(db.Integer,primary_key=True) #id INT PRIMARY_KEY
    nombre = db.Column(db.String(100),nullable=False)#nombre varchar(100) NOT NULL
    email = db.Column(db.String(100),unique=True)#email varchar(100) unique
    
    def __init__(self,nom,ema):
        self.nombre = nom
        self.email = ema

#MIGRACIONES
db.create_all()
print('se creo la tabla alumno en base de datos')


#CREAMOS ESQUEMAS PARA SERIALIZACIÓN DE DATOS
ma = Marshmallow(app)
class AlumnoSchema(ma.Schema):
    class Meta:
        fields = ('id','nombre','email')
        
        
@app.route('/')
def index():
    context = {
        'status':True,
        'content':'Bienvenido a mi api rest con flask y sqlalchemy'
    }
    return jsonify(context)

@app.route('/alumno',methods=['POST'])
def setAlumno():
    nombre = request.json['nombre']
    email = request.json['email']
    
    #insertamos el registro en la tabla alumno usando el orm
    #insert into alumno(nombre,email) values ('nombre','email)
    nuevoAlumno = Alumno(nombre,email)
    db.session.add(nuevoAlumno)
    db.session.commit()
    
    context = {
        'status':True,
        'content':'alumno registrado'
    }
    
    return jsonify(context)

@app.route('/alumno',methods=['GET'])
def getAlumno():
    listaAlumnos = Alumno.query.all() #select * from alumno
    
    
    #serializar datos
    alumnos_schema = AlumnoSchema(many=True)
    listaDictALumnos = alumnos_schema.dump(listaAlumnos)
    
    """listaDictALumnos = []
    #serializamos los datos
    for alumno in listaAlumnos:
        dicAlumno = {
            'nombre':alumno.nombre,
            'email':alumno.email
        }
        listaDictALumnos.append(dicAlumno)"""
    
    #print(listaDictALumnos)
    
    context = {
        'status':True,
        'content':listaDictALumnos
    }
    
    return jsonify(context)

if __name__ == "__main__":
    app.run(debug=True,port=5500)