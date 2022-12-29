from django.urls import path

from . import views

urlpatterns = [
    path('categoria',views.CategoriaView.as_view()),
    path('curso',views.CursoView.as_view())
]