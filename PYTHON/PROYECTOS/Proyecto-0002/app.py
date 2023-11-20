from fastapi import FastAPI ,HTTPException ,Depends , status # 
from pydantic import BaseModel # data validation
from typing import Annotated
import src.models
from src.database import engine , SessionLocal
from sqlalchemy.orm import Session

# instanciamos la app
app = FastAPI() 
src.models.Base.metadata.create_all(bind = engine)


# acá creamo los pydantics models...: PostBase y UserBase
class PostBase(BaseModel):
    title : str
    content : str
    user_id: int

class UserBase(BaseModel):
    username : str

############## crear nuestra dependencia con la db ##############
def get_db():
    db = SessionLocal()
    try: 
        yield db
    finally:
        db.close()
db_dependency = Annotated[Session , Depends(get_db)]
#################################################################