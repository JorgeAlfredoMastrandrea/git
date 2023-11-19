from fastapi import APIRouter
from config.db import conección
from models.user import users

user = APIRouter()

@user.get("/users")
def get_users():
    return conección.execute(users.select().fetch_all())