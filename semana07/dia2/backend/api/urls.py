from django.urls import path

from . import views

urlpatterns = [
    path('',views.IndexView.as_view()),
    path('tarea',views.TareasView.as_view()),
    path('tarea/<int:tarea_id>',views.TareaDetailView.as_view())
]