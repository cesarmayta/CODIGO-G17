import firebase_admin
from firebase_admin import credentials

#conectarme a mi cuenta de firebase
cred = credentials.Certificate('token.json')
firebase_admin.initialize_app(cred)

print("estas conectado a firebase")

from firebase_admin import firestore

db = firestore.client()

colAlumnos = db.collection('alumnos')
alumnos = colAlumnos.get()

for alumno in alumnos:
    print(alumno.to_dict())