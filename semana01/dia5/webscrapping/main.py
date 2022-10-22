#web scrapping del tipo de cambio de la SBS
import requests
from bs4 import BeautifulSoup

URL_SBS = "https://www.sbs.gob.pe/app/pp/sistip_portal/paginas/publicacion/tipocambiopromedio.aspx"

requestSBS = requests.get(URL_SBS)

if(requestSBS.status_code == 200):
    #exitoso
    #print(requestSBS.text)
    #parseamos el request con bs4
    html = BeautifulSoup(requestSBS.text,'html.parser')
    tabla = html.find_all('table',{'id':'ctl00_cphContent_rgTipoCambio_ctl00'})
    fila = tabla[0].find('tr',{'id':'ctl00_cphContent_rgTipoCambio_ctl00__0'})
    
    moneda = fila.find('td',{'class':'APLI_fila3'})
    tipoCambio = fila.find_all('td',{'class':'APLI_fila2'})
    print('Moneda : ' + moneda.get_text())
    print('Compra : ' + tipoCambio[0].get_text())
    print('Venta : ' + tipoCambio[1].get_text())
else:
    print("error " + str(requestSBS.status_code))
