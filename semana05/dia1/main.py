from flask import Flask,render_template,redirect,url_for,request
from flask_login import LoginManager

from forms import RegisterForm
from models import User,db_user

app = Flask(__name__)
app.config["SECRET_KEY"] = "miclavesecreta"

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/login")
def login():
    return render_template('login.html')

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
        print(db_user)
        return redirect(url_for('login'))
    
    context = {
        'form':form
    }
    return render_template('register.html',**context)

@login_manager.user_loader
def user_loader(user_id):
    for user in db_user:
        if user.id == int(user_id):
            return user
        return None

app.run(debug=True)

