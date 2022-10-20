def suma(n1,n2):
    resultado = n1 + n2
    return resultado

resultado1 = suma(3,4)
print(resultado1)

"""numero1 = input("numero 1 : ")
numero2 = input("numero 2 : ")
resultado2 = suma(int(numero1),int(numero2))
print(resultado2)
"""
def sumainfinito(*args):
    resultado = 0
    for numero in args:
        resultado += numero
    return resultado

resultado3 = sumainfinito(1,2,3,4,5,7)
print(resultado3)


def calculadora(*args):
    op = args[0]
    n1 = args[1]
    n2 = args[2]
    if(op=='suma'):
        resultado = n1 + n2
    elif(op=='resta'):
        resultado =  n1 - n2
    else:
        resultado = "operador incorrecto"
    
    return resultado
        
print(calculadora('suma',3,4))

# **kwargs
def mostrarAlumno(**kwargs):
    for clave,valor in kwargs.items():
        print(clave + ' - ' + valor)
        
mostrarAlumno(nombre='cesar',email='cesarmayta@gmail.com',celular='8979879')
        