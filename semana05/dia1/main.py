from flask import Flask,render_template,redirect,url_for,request
from flask_login import LoginManager,login_user,login_required,logout_user,current_user

from forms import RegisterForm
from models import User,db_user,get_user

app = Flask(__name__)
app.config["SECRET_KEY"] = "miclavesecreta"

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

@app.route("/")
@login_required
def index():
    return render_template('index.html')

@app.route("/login",methods=['GET','POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for("index"))
    
    mensajeError = ""
    if request.method == "POST":
        email = request.form['email']
        password = request.form['password']
        print("email : " + email + " - password : " + password)
        user =  get_user(email)
        if user is not None and user.verify_password(password):
            #iniciamos sesion con el metodo login_user de flask-login
            login_user(user)
            return redirect(url_for("index"))
        else:
            mensajeError = "Not valid Email or Password"
    
    
    context = {
        'mensajeError':mensajeError
    }
    return render_template('login.html',**context)

@app.route('/register',methods=['GET','POST'])
def register():
    form = RegisterForm()
    
    if form.validate_on_submit():
        #REGISTRO UN NUEVO USUARIO
        print("Registro de nuevo usuario")
        firstname = request.form["firstname"]
        lastname = request.form["lastname"]
        email = request.form["email"]
        password = request.form["password"]
        newUser = User(len(db_user)+1,firstname,lastname,email,password)
        db_user.append(newUser)
        login_user(newUser)
        print(db_user)
        return redirect(url_for('login'))
    
    context = {
        'form':form
    }
    return render_template('register.html',**context)


@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("index"))

@login_manager.user_loader
def user_loader(user_id):
    for user in db_user:
        if user.id == int(user_id):
            return user
        return None

app.run(debug=True)

