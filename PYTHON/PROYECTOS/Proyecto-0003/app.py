from fastapi import FastAPI ,HTTPException ,Depends , status # 
from pydantic import BaseModel # data validation
from typing import Annotated
import src.models
from src.database import engine , SessionLocal , session
from sqlalchemy.orm import Session

# instanciamos la app
app = FastAPI() 
src.models.Base.metadata.create_all(bind = engine)


# acá creamo los pydantics models...: PostBase y UserBase
class MesBase(BaseModel):
    nombre : str


############## crear nuestra dependencia con la db ##############
def get_db():
    db = SessionLocal()
    try: 
        yield db
    finally:
        db.close()
db_dependency = Annotated[Session , Depends(get_db)]
#################################################################

meses = [
    'Enero' ,
    'Febrero'   ,
    'Marzo'     ,
    'Abril'     ,
    'Mayo'      ,
    'Junio'     ,
    'Julio'     ,
    'Agosto'    ,
    'Setiembre' ,
    'Octubre'   ,
    'Noviembre' ,
    'Diciembre'
]

# cargamos la tabla mes
for mes in meses:    
    el_mes = src.models.Mes(nombre = mes)
    session.add(el_mes)
    
session.close()

