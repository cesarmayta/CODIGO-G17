from flask import Flask,jsonify,request
from flask_mysqldb import MySQL


from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

app = Flask(__name__)

app.config["JWT_SECRET_KEY"] = "qwerty123"  # Change this!
jwt = JWTManager(app)

#VALORES DE CONEXIÓN PARA LA BASE DE DATOS
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PORT'] = 3306
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'db_auth'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

@app.route('/')
def index():
    context = {
        'status':True,
        'content':'Bienvenido a mi apirest con flask mysql y jwt'
    }
    return jsonify(context)


@app.route("/login", methods=["POST"])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    
    if username != "admin" or password != "admin":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=username)
    
    context = {
        'status':True,
        'content':access_token
    }
    return jsonify(context)

@app.route('/user')
@jwt_required()
def getUser():
    cursor = mysql.connection.cursor()
    cursor.execute('select user_id as id,user_name as user from tbl_user')
    data = cursor.fetchall()
    print(data)
    cursor.close()
    
    context = {
        'status':True,
        'content':data
    }
    
    return jsonify(context)

app.run(debug=True)