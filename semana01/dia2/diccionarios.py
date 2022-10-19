capitales = {
    'Perú':'Lima',
    'Ecuador':'Quito',
    'Chile':'Santiago',
    'Uruguay':'Montevideo'
}

print(capitales)
#agregamos nuevo valor
nuevaCapital = {
    'Brasil':'Brasilia'
}
capitales.update(nuevaCapital)
print(capitales)

#pais = input('Ingrese el pais : ')
#capital = capitales.get(pais)
#print("la capital de " + pais + " es " + capital )

capitales.update({'Chile':'Arica'})
print(capitales)
#eliminar un valor del diccionario
c = capitales.pop('Colombia','no existe')
print('eliminaste ' + c)
print(capitales)