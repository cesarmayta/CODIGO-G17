#ENTRADA
from ast import AsyncFunctionDef


numero1 = input("Número 1 : ")
numero2 = input("Número 2 : ")
operacion = input("Operación a ejecutar(suma,resta) : ")
#PROCESO

if(operacion == "suma"):
    resultado = int(numero1) + int(numero2)
elif(operacion == "resta"):
    resultado = int(numero1) - int(numero2)
elif(operacion == "multiplicacion"):
    resultado = int(numero1) * int(numero2)
else:
    resultado = ""
#SALIDA
if(resultado == ""):
    print("Debe ingresar una operación valida")
else:
    print("El resultado es : " + str(resultado))
print("adios!!!")