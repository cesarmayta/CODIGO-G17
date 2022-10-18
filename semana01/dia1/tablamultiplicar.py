#ENTRADA
tabla = input("Ingrese tabla de multiplicar : ")
#PROCESO
for contador in range(1,13,1):
    #SALIDA
    print(tabla + " x " + str(contador) + " = " + str(contador * int(tabla)))
