from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

URL_BASE = 'mysql+pymysql://root:VicenteForEver@localhost:3306/BlogApplication'

engine = create_engine(URL_BASE)

SessionLocal = sessionmaker(autocommit = False ,  autoflush = False , bind = engine)

Base = declarative_base()