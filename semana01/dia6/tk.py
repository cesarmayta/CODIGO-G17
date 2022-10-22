from tkinter import *
from tkinter import messagebox

app = Tk()
app.geometry('240x120')
app.title('Mi primera interfaz grafica')

def login():
    print('login de usuario')
    messagebox.showinfo("mensaje","login correcto")
    
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
txtPassword = Entry(frame)
txtPassword.grid(row=2,column=1)
#boton
btnLogin = Button(frame,text='Login',command=login)
btnLogin.grid(row=3,column=0,columnspan=2)

app.mainloop()