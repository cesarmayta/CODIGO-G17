#PROGRAMA PARA CONVERTIR MONEDAS POR EL TIPO DE CAMBIO
#SOLES A DOLARES y VICEVERSA
#ENTRADA
opcion = 0
while(opcion != 3):
    print("""
    ===============================================
            CONVERTIDOR DE MONEDAS VERSION 1.0
    ===============================================
    OPCIÓN 1 : Convertir de soles a dolares
    OPCIÓN 2 : Convertir de dolares a soles
    OPCIÓN 3 : Salir
    ===============================================
    """)
    opcion = int(input("Ingrese una opción segun el menu: "))
    #PROCESO
    if(opcion == 1):
        #CONVERTIR DE SOLES A DOLARES
        montoOrigen = input("Ingrese monto en soles :")
        montoDestino = float(montoOrigen) / 3.8
        monedaDestino = "dolares"
    elif(opcion == 2):
        #CONVERTIR DE DOLARES A SOLES
        montoOrigen = float(input("Ingrese monto en dolares :"))
        montoDestino = montoOrigen * 3.9
        monedaDestino =  "soles"
    elif(opcion == 3):
        print("ADIOS !!!")
    else:
        print("debe ingresar una opción valida ...")

    #SALIDA
    if(opcion <= 2 and opcion >= 1):
        print("el monto en " + monedaDestino + " es " + str(montoDestino))

