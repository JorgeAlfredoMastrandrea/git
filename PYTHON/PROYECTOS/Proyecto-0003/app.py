from fastapi import FastAPI, HTTPException, Depends, status
from pydantic import BaseModel  # data validation
from typing import Annotated
import src.models
from src.database import engine, SessionLocal, session
from sqlalchemy.orm import Session
from sqlalchemy import insert

# instanciamos la app
app = FastAPI()

# borramos las tablas (ojo con esto)
# Deleting old tables
# src.models.Base.metadata.drop_all(engine, tables=[
#     src.models.Base.metadata.tables["mes"],
#     src.models.Base.metadata.tables["informe_tipo"],
#     src.models.Base.metadata.tables["informe_tipo"],
# ])

src.models.Base.metadata.create_all(bind=engine)


# acá creamo los pydantics models...: PostBase y UserBase
class MesBase(BaseModel):
    nombre: str


############## crear nuestra dependencia con la db ##############
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]
#################################################################


tuplaMeses = (
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Setiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
)


# cargamos la tabla mes
# for mes in tuplaMeses:
#     el_mes = src.models.Mes(nombre = mes)
#     session.add(el_mes)

#stmt = insert(src.models.Mes).values('nombre':nombre for nombre in tuplaMeses)
stmt = insert(src.models.Mes).values([{'nombre': nombre} for nombre in tuplaMeses])

with engine.begin() as SessionLocal:
    SessionLocal.execute(stmt)
# session.commit()
# session.close()
