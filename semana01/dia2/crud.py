"""
CRUD
C = CREATE
R = READ
U = UPDATE
D = DELETE
"""
alumno = {
    'nombre':'César Mayta',
    'email':'cesarmayta@gmail.com',
    'celular':'9992222'
}

listaAlumnos = [alumno]

opcion = "0"
while(opcion != "5"):
    print(
        """
        =========================================================
         PROGRAMA DE MATRICULA A DE ALUMNOS AL BOOTCAMP DE CODIGO
        =========================================================
        [1] REGISTRAR ALUMNO
        [2] MOSTRAR ALUMNOS
        [3] ACTUALIZAR ALUMNO
        [4] ELIMINAR ALUMNO
        [5] SALIR DEL PROGRAMA
        =========================================================
        """
    )
    opcion = input("INGRESE UN OPCIÓN DEL PROGRAMA : ")
    if(opcion == "1"):
        print("[1] REGISTRO DE NUEVO ALUMNO")
    elif(opcion == "2"):
        print("[2] MOSTRAR ALUMNOS")
    elif(opcion == "3"):
        print("[3] ACTUALIZAR ALUMNO")
    elif(opcion == "4"):
        print("[4] ELIMINAR ALUMNO")
    elif(opcion == "5"):
        print(" [5] ESTA SALIENDO DEL PROGRAMA ...")
    else:
        print(" OPCIÓN NO VALIDA !!!!!!")