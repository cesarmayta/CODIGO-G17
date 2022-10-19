dias = ['Lunes',"Martes","Miercoles",0]

print(dias)
print(dias[1])
#agregar un valor a la lista
dias.append("Jueves")
print(dias)
#eliminar
#dias.pop()
dias.pop(3)
print(dias)
#actualizar un valor
#dias[0] = 'domingo'
#print(dias)

#recorrer una lista
diasCorrectos = []
diasCorrectos.append('Domingo')
print(diasCorrectos)
for dia in dias:
    diasCorrectos.append(dia)
    
print(diasCorrectos)
