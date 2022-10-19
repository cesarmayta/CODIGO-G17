"""
crear un programa que ingrese un numero y cree un cuadra con * en base al numero
ingresado

ejemplo : num = 5
resultado:

* * * * * print('*' * cantidad)
*       *
*       *
*       *
* * * * *
15 min para hacerlo revisamos a las 9:25 pm
"""

#ENTRADA
lado = int(input("Ingrese el lado del cuadrado :"))

#PROCESO #SALIDA
for contador in range(0,lado,1):
    if(contador == 0 or contador == (lado -1)):
        print('* ' * lado)
    else:
        print('*' + str('  ' * (lado-2)) + ' *')
