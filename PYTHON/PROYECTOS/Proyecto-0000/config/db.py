from sqlalchemy import create_engine, MetaData

create_engine("mysql+pymsql://root:password@localhost:3306/") # root y password serían el usuario y la contraseña que le hemos dado a MySQL (no el de la base, el de la instalación !!)
