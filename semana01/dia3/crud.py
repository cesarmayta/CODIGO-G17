import os
import time
from libCrud import *

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
        time.sleep(1)
        os.system("clear")
    #mostrarMenu
    mostrarMenu()
    opcion = input("INGRESE UN OPCIÓN DEL PROGRAMA : ")
    os.system("clear")
    if(opcion == "1"):
        #insertarAlumno
        insertaAlumno(listaAlumnos)
    elif(opcion == "2"):
        #mostrarAlumnos
        mostrarAlumnos(listaAlumnos)
        input('presione un tecla para continuar ...')
    elif(opcion == "3"):
        print("[3] ACTUALIZAR ALUMNO")
        #BuscarAlumno PASO 1: buscar por el email el diccionario a editar
        valorBusqueda = input('Ingrese el email del alumno a actualizar : ')
        
        posicionBusqueda = buscarAlumno(valorBusqueda,listaAlumnos)
        
        if(posicionBusqueda == -1):
            print("No se encontro el alumno con el email ingresado :-(")
        else:
            #actualizar alumno
            actualizarAlumno(listaAlumnos,posicionBusqueda)
    elif(opcion == "4"):
        print("[4] ELIMINAR ALUMNO") 
        
    elif(opcion == "5"):
        print(" [5] ESTA SALIENDO DEL PROGRAMA ...")
    else:
        print(" OPCIÓN NO VALIDA !!!!!!")