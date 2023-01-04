class Cart:

    def __init__(self,request):
        self.request = request
        self.session = request.session
        cart = self.session.get("cart")
        montoTotal = self.session.get("cartMontoTotal")
        if not cart:
            cart = self.session["cart"] = {}
            montoTotal = self.session["cartMontoTotal"] = "0"
        self.cart = cart
        self.montoTotal = float(montoTotal)

    def add(self,producto,cantidad):
        if str(producto.id) not in self.cart.keys():
            self.cart[producto.id] = {
                "producto_id":producto.id,
                "nombre":producto.nombre,
                "cantidad":cantidad,
                "precio":str(producto.precio),
                "imagen":producto.imagen.url,
                "categoria":producto.categoria.nombre,
                "marca":producto.marca.nombre,
                "color":producto.color,
                "peso":str(producto.peso),
                "dimension":producto.dimension,
                "subtotal": str(cantidad * producto.precio)
            }
        else:
            #actualizamos el carrito incrementando la cantidad
            for key,value in self.cart.items():
                if key == str(producto.id):
                    value["cantidad"] = str(int(value["cantidad"]) + cantidad)
                    value["subtotal"] = str(float(value["cantidad"]) * float(value["precio"]))
                    break

        self.save()

    def delete(self,producto):
        producto_id = str(producto.id)
        if producto_id in self.cart:
            del self.cart[producto_id]
            self.save()

    def clear(self):
        self.session["cart"] = {}
        self.session["cartMontoTotal"] = "0"

    def save(self):
        montoTotal = 0
        for key,value in self.cart.items():
            montoTotal += float(value["subtotal"])
        
        self.session["cartMontoTotal"] = montoTotal
        self.session["cart"] = self.cart
        self.session.modified = True