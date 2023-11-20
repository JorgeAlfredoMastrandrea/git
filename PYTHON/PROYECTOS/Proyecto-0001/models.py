# acá declaramos el model de nuestra base de datos, es la parte en la que definimos las tablas 
# y sus relaciones entre ellas, para este caso habrán dos tablas : Use y Post
# Basic Relationship Patterns
# https://docs.sqlalchemy.org/en/20/orm/basic_relationships.html

from sqlalchemy import Boolean, Column, Integer, String
from database import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer , primary_key = True , index = True)
    username = Column(String(50) , unique = True)

class Post(Base):
    __tablename__ = 'posts'

    id = Column(Integer , primary_key = True , index = True)
    title = Column(String(50))
    content = Column(String(100))
    user_id = Column(Integer)