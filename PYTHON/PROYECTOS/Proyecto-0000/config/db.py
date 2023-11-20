from sqlalchemy import create_engine, MetaData

engine = create_engine("mysql+pymysql://root:VicenteForEver@localhost:3306/storedb") # root y password serían el usuario y la contraseña que le hemos dado a MySQL (no el de la base, el de la instalación !!)

meta = MetaData()

conn = engine.connect()
