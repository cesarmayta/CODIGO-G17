import os
import time

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
    if(opcion != "0"):
        time.sleep(2)
        os.system("clear")
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
        nombre = input("NOMBRE : ")
        email = input("EMAIL : ")
        celular = input("CELULAR: ")
        dicNuevoAlumno = {
            'nombre':nombre,
            'email':email,
            'celular':celular
        }
        listaAlumnos.append(dicNuevoAlumno)
        print("ALUMNO REGISTRADO CON EXITO :-) ")
    elif(opcion == "2"):
        print("[2] MOSTRAR ALUMNOS")
        for alumno in listaAlumnos:
            print('-'*20)
            for a,b in alumno.items():
                print(a + " - " + b)
                
        input('presione un tecla para continuar ...')
            
    elif(opcion == "3"):
        print("[3] ACTUALIZAR ALUMNO")
    elif(opcion == "4"):
        print("[4] ELIMINAR ALUMNO")
    elif(opcion == "5"):
        print(" [5] ESTA SALIENDO DEL PROGRAMA ...")
    else:
        print(" OPCIÓN NO VALIDA !!!!!!")