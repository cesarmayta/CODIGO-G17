import requests
from bs4 import BeautifulSoup


class Oferta:

    def __init__(self):
        self.url = ""
        
    def obtenerOfertas(self,valorBusqueda):
        requestOferta = requests.get(self.url + valorBusqueda,headers={
                        'User-Agent': 'Mozilla/5.0'
                        })
        if(requestOferta.status_code == 200):
            html = BeautifulSoup(requestOferta.text,'html.parser')
        else:
            html = 'error : ' + str(requestOferta.status_code)
        
        return html
        
class OfertaCompuTrabajo(Oferta):

    def __init__(self):
        self.url = "https://pe.computrabajo.com/trabajo-de-"
    
    def obtenerOfertas(self,valorBusqueda):
        html = super().obtenerOfertas(valorBusqueda)
        dataOfertas = html.find('div',{'id':'offersGridOfferContainer'})
        listaOfertas = dataOfertas.find_all('article')
        resultadoOfertas = []
        for oferta in listaOfertas:
            titulo = oferta.find('h1',{'class':'fs18 fwB'})
            empresa = oferta.find('p',{'class':'fs16 fc_base mt5 mb5'})
            urlOferta = oferta.find('a',{'class':'js-o-link fc_base'})
            dicOferta = {
                'titulo':titulo.get_text(),
                'empresa':empresa.get_text(),
                'descripcion':'',
                'url':"https://pe.computrabajo.com" + urlOferta['href']
            }
            resultadoOfertas.append(dicOferta)
            
        return resultadoOfertas
            
class Ofertalinkedin(Oferta):
    
    def __init__(self):
        self.url = "https://www.linkedin.com/jobs/search/?keywords="
    
    def obtenerOfertas(self,valorBusqueda):
        html = super().obtenerOfertas(valorBusqueda)
        dataOfertas = html.find_all('div',{'class':'jobs-search-results-list'})
        
            