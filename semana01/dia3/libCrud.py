##### LIBRERIA PARA CRUD DE ALUMNOS ####
def mostrarMenu():
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

def insertaAlumno(listaAlumnos):
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
    
def mostrarAlumnos(listaAlumnos):
    print("[2] MOSTRAR ALUMNOS")
    for alumno in listaAlumnos:
        print('-'*20)
        for a,b in alumno.items():
            print(a + " - " + b)
            
def buscarAlumno(valorBusqueda,listaAlumnos):
    posicionBusqueda = -1
    for contador in range(len(listaAlumnos)):
        dicAlumno = listaAlumnos[contador]
        for clave,valor in dicAlumno.items():
            if(clave == "email" and valor == valorBusqueda):
                posicionBusqueda = contador
                break
            
    return posicionBusqueda

def actualizarAlumno(listaAlumnos,posicionBusqueda):
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