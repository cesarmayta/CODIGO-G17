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
        
class Ladrillo(pygame.sprite.Sprite):
    def __init__(self,posicion):
        pygame.sprite.Sprite.__init__(self)
        self.image = pygame.image.load('imagenes/ladrillo.png')
        self.rect = self.image.get_rect()
        self.rect.topleft = posicion
        
class Muro(pygame.sprite.Group):
    def __init__(self,cantidad):
        pygame.sprite.Group.__init__(self)
        
        pos_x = 0
        pos_y = 20
        
        for i in range(cantidad):
            ladrillo = Ladrillo((pos_x,pos_y))
            self.add(ladrillo)
            
            pos_x += ladrillo.rect.width
            if pos_x >= ANCHO:
                pos_x = 0
                pos_y += ladrillo.rect.height
        
    
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
muro = Muro(50)

#cargamos sonidos del videojuego
sonido_colision = pygame.mixer.Sound('sonidos/colision.ogg')
sonido_colision_muro = pygame.mixer.Sound('sonidos/colision_muro.ogg')


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
        
    #colisión de bolita con el muro
    lista = pygame.sprite.spritecollide(bolita,muro,False)
    if lista:
        ladrillo = lista[0]
        
        #hacer que la bolita rebote al chocar con el ladrillo
        cx = bolita.rect.centerx
        print(cx)
        print(ladrillo.rect.left)
        print(ladrillo.rect.right)
        if cx < ladrillo.rect.left or cx > ladrillo.rect.right:
            bolita.speed[0] = -bolita.speed[0]
        else:
            bolita.speed[1] = -bolita.speed[1]
        
        muro.remove(ladrillo)
        pygame.mixer.Sound.play(sonido_colision_muro)
    
    
    
    #pintar la pantalla
    pantalla.fill(FONDO)
    #dibujamos los elementos del videjuego
    pantalla.blit(bolita.image,bolita.rect)
    pantalla.blit(jugador.image,jugador.rect)
    muro.draw(pantalla)
        
    pygame.display.flip()