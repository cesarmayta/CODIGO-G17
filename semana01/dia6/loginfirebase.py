import pyrebase

firebaseConfig = {
  "apiKey": "AIzaSyCAZHOwj-nNV6gZVTTmxpa2JLERbJ3BEdI",
  "authDomain": "cmayta-colegio.firebaseapp.com",
  "databaseURL": "https://cmayta-colegio-default-rtdb.firebaseio.com",
  "projectId": "cmayta-colegio",
  "storageBucket": "cmayta-colegio.appspot.com",
  "messagingSenderId": "960605884799",
  "appId": "1:960605884799:web:bb99362267ff48dd268a4a",
  "measurementId": "G-84YZX4NQK7"
}

firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()

usuario = input('ingrese usuario : ')
password = input('ingrese su passsword : ')

try:
    usuario = auth.sign_in_with_email_and_password(usuario,password)
    data = auth.get_account_info(usuario['idToken'])
    print(data)
except:
    print("Datos incorrectos")