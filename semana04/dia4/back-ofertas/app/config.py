from dotenv import load_dotenv
import os
from os.path import join,dirname


dotenv_path = join(dirname(__file__),'.env')
load_dotenv(dotenv_path)

class Config:
    #mysql://usuario:contraseña@servidor:puerto/basedatos
    SQLALCHEMY_DATABASE_URI= 'mysql://root:@localhost:3306/db_smartdevs'
    SQLALCHEMY_TRACK_MODIFICATIONS= False