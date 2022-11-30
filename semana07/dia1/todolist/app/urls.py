from django.urls import path

from . import views

urlpatterns = [
    path('',views.index),
    path('settarea',views.setTarea),
    path('autor',views.autor)
]