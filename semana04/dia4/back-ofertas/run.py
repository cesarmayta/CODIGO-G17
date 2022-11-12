from app import create_app
from utils.db import db

app = create_app()

with app.app_context():
    db.init_app(app)