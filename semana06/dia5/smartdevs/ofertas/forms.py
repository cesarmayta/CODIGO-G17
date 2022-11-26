from django import forms

from .models import Postulante

class PostulanteForm(forms.ModelForm):
    class Meta:
        model = Postulante
        fields = ['postulante_nombres', 'postulante_apellidos', 'postulante_nrodocide', 'postulante_fecnac','postulante_genero','postulante_perfil']