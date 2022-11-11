from dotenv import load_dotenv
import os
from os.path import join,dirname


dotenv_path = join(dirname(__file__),'.env')
load_dotenv(dotenv_path)

class Config:
    SQLALCHEMY_DATABASE_URI= 'mysql://root:@localhost/db_smartdevs'
    SQLALCHEMY_TRACK_MODIFICATIONS= False