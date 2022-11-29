from django import forms

class TareaForm(forms.Form):
    descripcion = forms.CharField(label='Nueva Tarea',max_length=200)