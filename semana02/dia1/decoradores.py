def decoradorMayuscula(func):
    def envoltura(texto):
        return func(texto).upper()
    return envoltura

@decoradorMayuscula
def mensaje(texto):
    return 'texto : ' + texto

print(mensaje('hola con decorador'))
