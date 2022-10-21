class Persona:
    def __init__(self,nom,ema,cel):
        self.nombre = nom
        self.email = ema
        self.celular = cel
        
    def mostrar(self):
        print("Nombre : " + self.nombre)
        
class Alumno(Persona):
    
    def matricular(self,cur):
        self.curso = cur
        print("alumno matriculado en el curso " + self.curso)
        
class Profesor(Persona):
    
    def __init__(self,nom,ema,cel,esp,ecivil):
        super().__init__(nom,ema,cel)
        self.especialidad = esp
        self.estadoCivil = ecivil
        
    def mostrar(self):
        super().mostrar()
        print('Especialidad : ' + self.especialidad)
    


#objetos
nuevoAlumno = Alumno('Jose Perez','jose@gmail.com','213232')
nuevoAlumno.mostrar()
nuevoAlumno.matricular('REACT')

nuevoProfesor = Profesor('César Mayta','cesarmayta@gmail.com','79879879','Backend','Casado')
nuevoProfesor.mostrar()