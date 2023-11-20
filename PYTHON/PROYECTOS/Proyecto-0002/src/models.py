from sqlalchemy import Boolean, Column, Integer, String
from src.database import Base

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import relationship
from typing import List

# One To Many
# A one to many relationship places a foreign key on the child table referencing the parent. 
# relationship() is then specified on the parent, as referencing a collection of items represented by the child:
#
# parent : Escuela
# child : Alumno
# One To Many : Escuela 1 ----------> n Alumno

class Escuela(Base):
    __tablename__ = "escuela"

    id: Mapped[int] = mapped_column(primary_key=True)
    nombre : Mapped[String] = mapped_column(String(50) , unique = False)
    children: Mapped[List["Alumno"]] = relationship()


class Alumno(Base):
    __tablename__ = "alumno"

    id: Mapped[int] = mapped_column(primary_key=True)
    escuela_id: Mapped[int] = mapped_column(ForeignKey("escuela.id"))

#################################################################################################################
# One To Many (reversed)
# To establish a bidirectional relationship in one-to-many, where the “reverse” side is a many to one, 
# specify an additional relationship() and connect the two using the relationship.back_populates parameter, 
# using the attribute name of each relationship() as the value for relationship.back_populates on the other:
#
# parent : Parent
# child : Child
# One To Many Reverse : Parent 1 <----------> n Child

class Parent(Base):
    __tablename__ = "parent_table"

    id: Mapped[int] = mapped_column(primary_key=True)
    children: Mapped[List["Child"]] = relationship(back_populates="parent")


class Child(Base):
    __tablename__ = "child_table"

    id: Mapped[int] = mapped_column(primary_key=True)
    parent_id: Mapped[int] = mapped_column(ForeignKey("parent_table.id"))
    parent: Mapped["Parent"] = relationship(back_populates="children")

#################################################################################################################


