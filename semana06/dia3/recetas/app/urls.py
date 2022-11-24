from django.urls import path

from . import views

app_name = 'app'

urlpatterns = [
    path('',views.index),
    path('receta/<int:recetaId>',views.receta)
]