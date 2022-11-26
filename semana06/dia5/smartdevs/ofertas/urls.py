from django.urls import path

from . import views

app_name = 'ofertas'

urlpatterns = [
    path('',views.index,name='index'),
    path('ofertasporarea/<int:area_id>',views.ofertasPorArea,name='ofertasporarea'),
    path('ofertasportitulo',views.ofertaPorTitulo,name='ofertaportitulo'),
    path('oferta/<int:oferta_id>',views.ofertaDetalle,name='oferta')
]
