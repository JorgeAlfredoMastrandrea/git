from sqlalchemy import create_engine    # sirve para que la app se pueda comunicar con la db
from sqlalchemy.orm import sessionmaker # 
from sqlalchemy.ext.declarative import declarative_base # 

URL_BASE = 'mysql+pymysql://root:VicenteForEver@localhost:3306/informes_1' # la url de la base a la que vamos a conectar

engine = create_engine(URL_BASE) # le vamos a pasar la variable de la base para que engine sepa donde conectarse

SessionLocal = sessionmaker(autocommit = False ,  
                            autoflush = False , 
                            bind = engine)
session = SessionLocal()

Base = declarative_base()

