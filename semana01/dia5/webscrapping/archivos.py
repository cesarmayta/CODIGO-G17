archivo = open('tipoCambio.csv','a')
archivo.write('\nsoles,3.9,3.10')
archivo.close()

leerArchivo = open('tipoCambio.csv','r')
data = leerArchivo.read()
print(data)