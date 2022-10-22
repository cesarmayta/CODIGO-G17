#web scrapping del tipo de cambio de la SBS
import requests
from bs4 import BeautifulSoup

#URL_SBS = "https://e-consulta.sunat.gob.pe/cl-at-ittipcam/tcS01Alias"
#URL_BCR = "https://www.bcrp.gob.pe/"
URL_SUNAT = "https://www.sunat.gob.pe/"

requestSUNAT = requests.get(URL_SUNAT)

if(requestSUNAT.status_code == 200):
    #exitoso
    #print(requestSUNAT.text)
    #parseamos el request con bs4
    html = BeautifulSoup(requestSUNAT.text,'html.parser')
    fecha = html.find('date',{'class':'my-1 text-sm right-1 mr-8 text-gray-1600'})
    venta = html.find('strong',{'id':'sell-rate'})
    compra = html.find('strong',{'id':'buy-rate'})
    print("fecha : " + fecha.get_text()[3:13])
    print("compra : " + compra.get_text())
    print("venta : " + venta.get_text())
    
    archivoTipoCambio = open('tipoCambio.csv','a')
    textoTipoCambio = '\n' + fecha.get_text()[3:13] + ';' + compra.get_text() + ';' + venta.get_text()
    archivoTipoCambio.write(textoTipoCambio)
    archivoTipoCambio.close()
else:
    print("error " + str(requestSUNAT.status_code))
