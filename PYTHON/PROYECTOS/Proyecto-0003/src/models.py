from sqlalchemy import Boolean, Column, Integer, String
from src.database import Base , session

from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import relationship
from sqlalchemy.orm import sessionmaker
from typing import List

""" tabla que se genera fácil"""
#---------------------------#
#   Mes                     #
#---------------------------#
#   id  |   descripción     #
#---------------------------#
#   1   |   Enero           #
#   2   |   Febrero         #
#   .   |   .               #
#   12  |   Diciembre       #
#---------------------------#


""" tabla que se genera fácil"""
#-------------------------------#
#   Informe_Tipo                #
#-------------------------------#
#   id  |   descripción         #
#-------------------------------#
#   1   |   Fluidez Lectora     #
#   2   |   Asistencia          #
#   3   |   Notas               #
#-------------------------------#


""" tabla que se genera fácil """
#-------------------------------#
#   Entidad_Tipo                #
#-------------------------------#
#   id  |   descripción         #
#-------------------------------#
#   1   |   D.G.E.              #    
#   2   |   Escuela             #
#   3   |   Supervisión         #
#   4   |   Regional            #
#   5   |   Departamental       #
#   6   |   Dirección de Linea  #
#   7   |   Alumno              #
#-------------------------------#

""" no va esta tabla  
#################################################
#   Entidad                                     #
#################################################
#   id  #   entidad_tipo_id     #   dge_id      #
#################################################
#   1   #   1                   #   1           #
#   2   #   2                   #   escuela_id  #
#   3   #   2                   #   escuela_id  #
#   4   #   .                   #               #
#   5   #   .                   #               #
#   6   #   3                   #   sup_id      #
#   7   #                       #               #
#################################################
"""


""" esta tabla se genera con cada informe, es la tabla que por ejemplo usaría 
la escuela para poder leer todos los json de cada año para fluidez lectora
con su correspondiente mes en el que se hizo el operativo,leyendo todos los 
informe_tipo_id = 1, puedo traer todos los informes de fl por ciclo y su mes
correspondiente  """
#---------------------------------------------------------------------------------------------------------------#
#   Entidad_Informe                                                                                             #
#---------------------------------------------------------------------------------------------------------------#
#   id  |   ciclo_lectivo   |   mes_id  |   entidad_tipo_id |   entidad_dge_id  |   informe_tipo_id |   json    #
#---------------------------------------------------------------------------------------------------------------#
#   1   |   2022            |   3       |   2               |   1035            |   1               |           #
#   2   |   2022            |   3       |   2               |   1036            |   1               |           #
#   3   |   2022            |   3       |   3               |   1               |   1               |           #
#################################################################################################################    


#######################################################

# One To Many
# A one to many relationship places a foreign key on the child table referencing the parent. 
# relationship() is then specified on the parent, as referencing a collection of items represented by the child:
#
# parent : Escuela
# child : Alumno
# One To Many : Escuela 1 ----------> n Alumno

"""
class Mes(Base):
    __tablename__ = "mes"
    id: Mapped[int] = mapped_column( ForeignKey("entidad_informe.mes_id") , primary_key=True)
    nombre : Mapped[String] = mapped_column(String(10) , unique = True)   


class InformeTipo(Base):
    __tablename__ = "informe_tipo"
    id: Mapped[int] = mapped_column(ForeignKey("entidad_informe.informe_tipo_id") , primary_key=True)
    descripción: Mapped[String] = mapped_column(String(100) , unique = True)


class EntidadTipo(Base):
    __tablename__ = "entidad_tipo"
    id: Mapped[int] = mapped_column( ForeignKey("entidad_informe.entidad_tipo_id") , primary_key=True)
    descripción: Mapped[String] = mapped_column(String(100) , unique = True)


class EntidadInforme(Base):
    __tablename__ = "entidad_informe"
    id: Mapped[int] = mapped_column(primary_key=True)
    ciclo_lectivo : Mapped[int] = mapped_column(Integer)
    
    mes_id : Mapped[Mes] = relationship()
    
    entidad_tipo_id : Mapped[EntidadTipo] = relationship()
    
    entidad_dge_id : Mapped[int] = mapped_column(Integer)
    
    informe_tipo_id : Mapped[InformeTipo] = relationship()
    
    archivo_JSON : Mapped[String] = mapped_column(String(256) , unique = True)
"""


class Mes(Base):
    __tablename__ = "mes"
    id = Column(Integer, primary_key=True)
    nombre = Column(String(10) , nullable=False , unique=True)

class InformeTipo(Base):
    __tablename__ = "informe_tipo"
    id = Column(Integer, primary_key=True)
    descripcion = Column(String(100) , nullable=False , unique=True)

class EntidadTipo(Base):
    __tablename__ = "entidad_tipo"
    id = Column(Integer, primary_key=True)
    descripcion = Column(String(100) , nullable=False , unique=True)

class EntidadInforme(Base):
    __tablename__ = "entidad_informe"
    id = Column(Integer , primary_key=True)
    ciclo_lectivo = Column(Integer , nullable=False)
    
    mes_id = Column(Integer,  ForeignKey('mes.id') , nullable=False )
    mes = relationship('Mes')
    
    entidad_tipo_id = Column(Integer, ForeignKey('entidad_tipo.id') , nullable=False)
    entidad_tipo = relationship('EntidadTipo')
    
    entidad_dge_id = Column(Integer , nullable=False)
    
    informe_tipo_id = Column(Integer, ForeignKey('informe_tipo.id') , nullable=False ) 
    informe_tipo = relationship('InformeTipo')
    
    archivo_JSON = Column(String(256), nullable=False  , unique=True)



