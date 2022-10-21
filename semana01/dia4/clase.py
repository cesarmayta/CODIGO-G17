#crear un clase
class Automovil:
    #crear atributos
    def __init__(self,aa,pl,col,mar):
        self.año = aa
        self.placa = pl
        self.color = col
        self.marca = mar
        
    #crear metodos
    def encender(self):
        print('encender ' + self.marca)
    
    def avanzar(self):
        print('avanzar ' + self.marca)
        
    def acelerar(self):
        print('acelerar ' + self.marca)
        
    def frenar(self):
        print('frenar ' + self.marca)
        
##creamos objetos
vw = Automovil(1970,'CH-1234','Amarillo','Volkswagen')
tico = Automovil(1985,'AB-1234','Rojo','Tico')

vw.encender()
vw.avanzar()
vw.acelerar()
vw.frenar()

tico.encender()
tico.avanzar()
tico.acelerar()
tico.frenar()