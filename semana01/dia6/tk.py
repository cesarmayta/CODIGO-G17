import pyrebase
from tkinter import *
from tkinter import messagebox

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

app = Tk()
app.geometry('240x140')
app.title('Mi primera interfaz grafica')

def login():
    print('login de usuario')
    try:
        usuario = auth.sign_in_with_email_and_password(txtUsuario.get(),txtPassword.get())
        data = auth.get_account_info(usuario['idToken'])
        messagebox.showinfo("mensaje",data)
    except:
        print("Datos incorrectos")
        messagebox.showinfo("mensaje","datos incorrectos")
        
def crearUsuario():
    print("crear usuario")
    try:
        nuevoUsuario = auth.create_user_with_email_and_password(txtUsuario.get(),txtPassword.get())
        data = auth.get_account_info(nuevoUsuario['idToken'])
        messagebox.showinfo("nuevo usuario",data)
    except:
        messagebox.showerror("mensaje","no se pudo crear el usuario")
        
        
#frame
frame = LabelFrame(app,text='Login de Usuarios')
frame.grid(row=0,column=0,columnspan=3,pady=20,padx=20)
#label
lbUsuario = Label(frame,text='Usuario : ')
lbUsuario.grid(row=1,column=0)
#caja de texto
txtUsuario = Entry(frame)
txtUsuario.grid(row=1,column=1)
#label
lbPassword = Label(frame,text='Password :')
lbPassword.grid(row=2,column=0)
#caja de texto de password
txtPassword = Entry(frame,show="*")
txtPassword.grid(row=2,column=1)
#boton
btnLogin = Button(frame,text='Login',command=login)
btnLogin.grid(row=3,column=0,columnspan=2)
#boton registro
btnCrearUsuario = Button(frame,text='Crear Usuario',command=crearUsuario)
btnCrearUsuario.grid(row=4,column=0,columnspan=2)

app.mainloop()