import sys
import pygame

ANCHO = 640
ALTO = 480
FONDO = (0,0,64)

pygame.init()

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
        #verificar si la bolita se sale de la pantalla
        if self.rect.bottom >= ALTO or self.rect.top <= 0:
            self.speed[1] = -self.speed[1]
        elif self.rect.right >= ANCHO or self.rect.left <= 0:
            self.speed[0] = -self.speed[0]
            
        #movemos la bolita
        self.rect.move_ip(self.speed)

class Paleta(pygame.sprite.Sprite):
    
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.image = pygame.image.load('imagenes/paleta.png')
        self.rect = self.image.get_rect()
        self.rect.midbottom = (ANCHO / 2,ALTO -20)
        self.speed = [0,0]
        
    def update(self,evento):
        if evento.key == pygame.K_LEFT and self.rect.left > 0:
            self.speed = [-5,0]
        elif evento.key == pygame.K_RIGHT and self.rect.right < ANCHO:
            self.speed = [5,0]
        else:
            self.speed = [0,0]
            
        self.rect.move_ip(self.speed)
######################################

#creamos la pantalla del videojuego
pantalla = pygame.display.set_mode((ANCHO,ALTO))
pygame.display.set_caption('Mi primer videjuego con Python')

#crear un reloj para hacer que bolita se mueva mas lento
reloj = pygame.time.Clock()

#ajustar repetición del evento de tecla presionada
pygame.key.set_repeat(30)

#creamos los objetos del videojuego
bolita = Bolita()
jugador = Paleta()

#cargamos sonidos del videojuego
sonido_colision = pygame.mixer.Sound('sonidos/colision.ogg')


while True:
    #establecer el tiempo del reloj
    reloj.tick(60)
    #manejador de eventos
    for evento in pygame.event.get():
        #verificamos el evento de salir
        if evento.type == pygame.QUIT:
            sys.exit()
        elif evento.type == pygame.KEYDOWN:
            jugador.update(evento)
            
    #mover la bolita
    bolita.update()
    
    ### colisiones
    #colisión de la bolita con el jugador
    if pygame.sprite.collide_rect(bolita,jugador):
        bolita.speed[1] = -bolita.speed[1]
        pygame.mixer.Sound.play(sonido_colision)
    
    
    
    #pintar la pantalla
    pantalla.fill(FONDO)
    #dibujamos los elementos del videjuego
    pantalla.blit(bolita.image,bolita.rect)
    pantalla.blit(jugador.image,jugador.rect)
        
    pygame.display.flip()