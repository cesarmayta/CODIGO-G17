from django.urls import path

from . import views

urlpatterns = [
    path('',views.index),
    path('categoria',views.categoria),
    path('marca',views.marca),
    path('producto',views.producto)
]