import sys
import pygame

ANCHO = 640
ALTO = 480
FONDO = (0,0,64)

### CLASES DEL VIDEOJUEGO###########
class Bolita(pygame.sprite.Sprite):
    
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        #imagen del sprite
        self.image = pygame.image.load('imagenes/bolita.png')
        #obtener el rectangulo de la imagen
        self.rect = self.image.get_rect()
        self.rect.centerx = ANCHO / 2
        self.rect.centery = ALTO / 2
        #establecer velocidad
        self.speed = [3,3]
        
    def update(self):
        #movemos la bolita
        self.rect.move_ip(self.speed)


######################################

#creamos la pantalla del videojuego
pantalla = pygame.display.set_mode((ANCHO,ALTO))
pygame.display.set_caption('Mi primer videjuego con Python')

#crear un reloj para hacer que bolita se mueva mas lento
reloj = pygame.time.Clock()

#creamos los objetos del videojuego
bolita = Bolita()

while True:
    #establecer el tiempo del reloj
    reloj.tick(60)
    #manejador de eventos
    for evento in pygame.event.get():
        #verificamos el evento de salir
        if evento.type == pygame.QUIT:
            sys.exit()
    #mover la bolita
    bolita.update()
    #pintar la pantalla
    pantalla.fill(FONDO)
    #dibujamos los elementos del videjuego
    pantalla.blit(bolita.image,bolita.rect)
        
    pygame.display.flip()