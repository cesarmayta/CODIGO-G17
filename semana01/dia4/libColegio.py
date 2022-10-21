class Alumno:
    
    def __init__(self,nom,ema,cel):
        self.nombre = nom
        self.email = ema
        self.celular = cel
        
    def insertar(self,listaAlumnos):
        dicAlumno = {
            'nombre':self.nombre,
            'email':self.email,
            'celular':self.celular
        }
        listaAlumnos.append(dicAlumno)
        
    def mostrar(self):
        print(" alumno : " + self.nombre)
        
class Curso:
    
    def __init__(self,nom,profesor):
        self.nombre = nom
        self.profesor = profesor
    
    def mostrar(self):
        print("CURSO  : " + self.nombre)
        
class Profesor:
    
    def __init__(self,nom,ema,cel,esp,ecivil):
        self.nombre = nom
        self.email = ema
        self.celular = cel
        self.especialidad = esp
        self.estadoCivil = ecivil
        
    def mostrar(self):
        print("PROFESOR : " + self.nombre)
        
## objetos
nombre = input("nombre : ")
email = input("Email : ")
celular =  input("Celular :")
nuevoAlumno = Alumno(nombre,email,celular)
nuevoAlumno.mostrar()


nombreCurso = input('Ingrese el nombre del curso : ')
nombreProfesor = input('Ingrese el nombre del profesor : ')
especialidadProfesor = input('Ingrese especialidad del profesor : ')

nuevoProfesor = Profesor(nombreProfesor,'','',especialidadProfesor,'soltero')
nuevoProfesor.mostrar()

nuevoCurso = Curso(nombreCurso,nuevoProfesor.nombre)
nuevoCurso.mostrar()