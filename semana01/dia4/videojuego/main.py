import sys
import pygame

ANCHO = 640
ALTO = 480

#creamos la pantalla del videojuego
pantalla = pygame.display.set_mode((ANCHO,ALTO))
pygame.display.set_caption('Mi primer videjuego con Python')

while True:
    #manejador de eventos
    for evento in pygame.event.get():
        #verificamos el evento de salir
        if evento.type == pygame.QUIT:
            sys.exit()
        
    pygame.display.flip()