from django.urls import path

from . import views

urlpatterns = [
    path('area', views.Area.as_view()),
    path('area/<int:pk>',views.AreaDetail.as_view())
]
