from django.urls import path

from . import views

app_name = 'web'

urlpatterns = [
    path('',views.index,name='index'),
    path('producto/<int:producto_id>',views.producto,name='producto'),
    path('productosPorCategoria/<int:categoria_id>',views.productosPorCategoria,name='productosPorCategoria'),
    path('productosPorMarca/<int:marca_id>',views.productosPorMarca,name='productosPorMarca'),
    path('productosPorNombre',views.productosPorNombre,name='productosPorNombre'),
    path('carrito',views.carrito,name='carrito'),
    path('agregarCarrito/<int:producto_id>',views.agregarCarrito,name='agregarCarrito'),
    path('eliminarProductoCarrito/<int:producto_id>',views.eliminarProductoCarrito,name='eliminarProductoCarrito'),
    path('limpiarCarrito',views.limpiarCarrito,name='limpiarCarrito'),
    path('crearUsuario',views.crearUsuario,name='crearUsuario'),
    path('login',views.loginUsuario,name='loginUsuario'),
    path('logout',views.logoutUsuario,name='logoutUsuario'),
    path('cuenta',views.cuentaUsuario,name='cuentaUsuario'),
    path('actualizarCliente',views.actualizarCliente,name='actualizarCliente'),
    path('registrarPedido',views.registrarPedido,name='registrarPedido'),
    path('pedidopagado',views.pedidopagado,name='pedidopagado')
]