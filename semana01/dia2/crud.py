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
        time.sleep(1)
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
    os.system("clear")
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
        #PASO 1: buscar por el email el diccionario a editar
        valorBusqueda = input('Ingrese el email del alumno a actualizar : ')
        posicionBusqueda = -1
        for contador in range(len(listaAlumnos)):
            dicAlumno = listaAlumnos[contador]
            for clave,valor in dicAlumno.items():
                if(clave == "email" and valor == valorBusqueda):
                    posicionBusqueda = contador
                    break
                
        if(posicionBusqueda == -1):
            print("No se encontro el alumno con el email ingresado :-(")
        else:
            print("ALUMNO ENCONTRADO : " + listaAlumnos[posicionBusqueda].get("nombre"))
            print("INGRESE NUEVOS VALORES PARA EL ALUMNO ENCONTRADO")
            
            nombre = input('NUEVO NOMBRE : ')
            if(nombre == ''):
                nombre = listaAlumnos[posicionBusqueda].get("nombre")
                
            email = input('NUEVO EMAIL : ')
            if(email == ''):
                email = listaAlumnos[posicionBusqueda].get('email')
                
            celular = input('NUEVO CELULAR : ')
            if(celular == ''):
                celular = listaAlumnos[posicionBusqueda].get('celular')
                
            dicAlumnoEditar = {
                'nombre':nombre,
                'email':email,
                'celular':celular
            }
            #actualizamos el diccionario en la lista
            listaAlumnos[posicionBusqueda] = dicAlumnoEditar
            print('ALUMNO ACTUALIZADO !!!')
    elif(opcion == "4"):
        print("[4] ELIMINAR ALUMNO") 
    elif(opcion == "5"):
        print(" [5] ESTA SALIENDO DEL PROGRAMA ...")
    else:
        print(" OPCIÓN NO VALIDA !!!!!!")