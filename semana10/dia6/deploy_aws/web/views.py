from django.shortcuts import render,redirect

from .models import (
    Categoria,Marca,
    Producto,Cliente,
    Pedido,PedidoDetalle
)

from .carrito import Cart

from .forms import ClienteForm

################### CATALOGO DE PRODUCTOS
def index(request):
    listaCategorias = Categoria.objects.all()
    listaMarcas = Marca.objects.all()
    listaProductos = Producto.objects.all()
    context = {
        'marcas':listaMarcas,
        'categorias':listaCategorias,
        'productos':listaProductos
    }
    return render(request,'index.html',context)

def producto(request,producto_id):
    objProducto = Producto.objects.get(pk=producto_id)
    context = {
        'producto':objProducto
    }
    return render(request,'producto.html',context)

def productosPorCategoria(request,categoria_id):
    objCategoria = Categoria.objects.get(pk=categoria_id)
    listaProductos = objCategoria.producto_set.all()

    listaCategorias = Categoria.objects.all()
    listaMarcas = Marca.objects.all()
    context = {
        'marcas':listaMarcas,
        'categorias':listaCategorias,
        'productos':listaProductos
    }

    return render(request,'index.html',context)

def productosPorMarca(request,marca_id):
    objMarca = Marca.objects.get(pk=marca_id)
    listaProductos = objMarca.producto_set.all()

    listaCategorias = Categoria.objects.all()
    listaMarcas = Marca.objects.all()
    context = {
        'marcas':listaMarcas,
        'categorias':listaCategorias,
        'productos':listaProductos
    }

    return render(request,'index.html',context)

def productosPorNombre(request):
    nombre = request.POST['nombre']
    print('valor a buscar : ' + nombre)
    listaProductos = Producto.objects.filter(nombre__contains=nombre)

    listaCategorias = Categoria.objects.all()
    listaMarcas = Marca.objects.all()
    context = {
        'marcas':listaMarcas,
        'categorias':listaCategorias,
        'productos':listaProductos
    }

    return render(request,'index.html',context)


############################ CARRITO DE COMPRAS ############

def carrito(request):
    return render(request,'carrito.html')

def agregarCarrito(request,producto_id):
    if request.method == 'POST':
        cantidad = int(request.POST['cantidad'])
    else:
        cantidad  = 1
    
    objProducto = Producto.objects.get(pk=producto_id)
    carritoProducto = Cart(request)
    carritoProducto.add(objProducto,cantidad)
    #print(request.session.get("cart"))

    #print(request.path_info)

    if request.method == 'GET':
        return redirect("/")


    return render(request,'carrito.html')

def eliminarProductoCarrito(request,producto_id):
    objProducto = Producto.objects.get(pk=producto_id)
    carritoProducto = Cart(request)
    carritoProducto.delete(objProducto)

    return render(request,'carrito.html')

def limpiarCarrito(request):
    carritoProducto = Cart(request)
    carritoProducto.clear()

    return render(request,'carrito.html')
    
############################# CUENTA DE USUARIO

from django.contrib.auth.models import User
from django.contrib.auth import login,logout,authenticate

def crearUsuario(request):
    if request.method == "POST":
        dataUsuario = request.POST['nuevoUsuario']
        dataPassword = request.POST['nuevoPassword']

        nuevoUsuario = User.objects.create_user(username=dataUsuario,password=dataPassword)
        if nuevoUsuario is not None:
            login(request,nuevoUsuario)
            return redirect('/cuenta')
        

        return render(request,'login.html')

def loginUsuario(request):
    context = {}
    if request.method == 'POST':
        #login de usuarios
        dataUsuario = request.POST['usuario']
        dataPassword = request.POST['password']

        usuarioAuth = authenticate(request,username=dataUsuario,password=dataPassword)
        if usuarioAuth is not None:
            login(request,usuarioAuth)
            return redirect('/cuenta')
        else:
            context = {
                'error':'datos incorrectos'
            }

    return render(request,'login.html',context)

def logoutUsuario(request):
    logout(request)
    return render(request,'login.html')

def cuentaUsuario(request):
    
    try:
        clienteEditar = Cliente.objects.get(usuario = request.user)
        dataCliente = {
            'nombre':request.user.first_name,
            'apellidos': request.user.last_name,
            'email': request.user.email,
            'direccion': clienteEditar.direccion,
            'telefono':clienteEditar.telefono,
            'dni':clienteEditar.dni,
            'sexo':clienteEditar.sexo,
            'fecha_nacmiento':clienteEditar.fecha_nacimiento
        }
    except:
        dataCliente = {
            'nombre':request.user.first_name,
            'apellidos': request.user.last_name,
            'email': request.user.email,
        }

    frmCliente = ClienteForm(dataCliente)
    context = {
        'frmCliente' : frmCliente
    }

    return render(request,'cuenta.html',context)

def actualizarCliente(request):
    mensaje = ""
    if request.method == 'POST':
        frmCliente = ClienteForm(request.POST)
        if frmCliente.is_valid():
            dataCliente = frmCliente.cleaned_data

            #actualizar el usuario
            actUsuario = User.objects.get(pk=request.user.id)
            actUsuario.first_name = dataCliente["nombre"]
            actUsuario.last_name = dataCliente["apellidos"]
            actUsuario.email = dataCliente["email"]
            actUsuario.save()

            try:
                actCliente = Cliente.objects.get(usuario = request.user)
                actCliente.dni = dataCliente["dni"]
                actCliente.direccion = dataCliente["direccion"]
                actCliente.telefono = dataCliente["telefono"]
                actCliente.sexo = dataCliente["sexo"]
                actCliente.fecha_nacimiento = dataCliente["fecha_nacimiento"]
                actCliente.save()
            except:
                nuevoCliente = Cliente()
                nuevoCliente.usuario = actUsuario
                nuevoCliente.dni = dataCliente["dni"]
                nuevoCliente.direccion = dataCliente["direccion"]
                nuevoCliente.telefono = dataCliente["telefono"]
                nuevoCliente.sexo = dataCliente["sexo"]
                nuevoCliente.fecha_nacimiento = dataCliente["fecha_nacimiento"]
                nuevoCliente.save()
            mensaje = "Datos Actualizados"
        else:
            mensaje = "Error al actualizar los datos"
            
    context = {
        'mensaje':mensaje,
        'frmCliente':frmCliente
    }

    return render(request,'cuenta.html',context)

################# PEDIDOS ########################

### PARA PAGOS CON PAYPAL
from django.conf import settings
from paypal.standard.forms import PayPalPaymentsForm

def registrarPedido(request):
    if request.user.id is not None:
        nroPedido = ''
        montoTotal = 0
        #registrar cabecera del pedido
        clientePedido = Cliente.objects.get(usuario=request.user)
        nuevoPedido = Pedido()
        nuevoPedido.cliente = clientePedido
        nuevoPedido.save()

        #registrar Detalle de Pedido
        carritoPedido = request.session.get('cart')
        for key,value in carritoPedido.items():

            productoPedido = Producto.objects.get(pk=value["producto_id"])

            nuevoPedidoDetalle = PedidoDetalle()
            nuevoPedidoDetalle.pedido = nuevoPedido
            nuevoPedidoDetalle.producto = productoPedido
            nuevoPedidoDetalle.cantidad = int(value['cantidad'])
            nuevoPedidoDetalle.subtotal = float(value['subtotal'])
            nuevoPedidoDetalle.save()
            montoTotal += float(value['subtotal'])
        
        carrito = Cart(request)
        carrito.clear()
        #actualizamos el nro de pedido y monto
        nroPedido = 'PED' + nuevoPedido.fecha_registro.strftime('%Y') + str(nuevoPedido.id)
        nuevoPedido.nro_pedido = nroPedido
        nuevoPedido.monto_total = montoTotal
        nuevoPedido.save()

        #CREAMOS BOTON DE PAGO PARA PAYPAL
        request.session['paypal_pid'] = nuevoPedido.id
        host = request.get_host()
        paypal_datos = {
            'business': settings.PAYPAL_RECEIVER_EMAIL,
            'amount':montoTotal,
            'item_name':'PEDIDO NRO' + nroPedido,
            'invoice': nroPedido,
            'notify_url':'http://' + host + '/' + 'paypal-ipn',
            'return_url':'http://' + host + '/' + 'pedidopagado'
        }

        formPedidoPaypal = PayPalPaymentsForm(initial=paypal_datos)


        context = {
            'pedido':nuevoPedido,
            'formpaypal':formPedidoPaypal
        }

        return render(request,'pedido.html',context)
    else:
        return redirect('/login')

def pedidopagado(request):
    pedidoID = request.session.get('paypal_pid')
    print(pedidoID)
    pedidoEditar = Pedido.objects.get(pk=pedidoID)
    pedidoEditar.estado = '1'
    pedidoEditar.save()

    return render(request,'gracias.html')