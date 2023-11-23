from fastapi import FastAPI ,HTTPException ,Depends , status # 
from sqlalchemy import create_engine, Column, Integer, ForeignKey, Float, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


app = FastAPI()

# Create a SQLite database named shop.db
engine = create_engine('mysql+pymysql://root:VicenteForEver@localhost:3306/informes_1', echo=True)

# Create a base class for declarative models
Base = declarative_base()

# Define the Item model
class Item(Base):
    __tablename__ = 'items'
    
    item_id = Column(Integer, primary_key=True)
    item_name = Column(String(100), nullable=False)
    item_price = Column(Float, nullable=False)
    item_quantity = Column(Integer, nullable=False)


# Define the User model
class User(Base):
    __tablename__ = 'users'
    
    user_id = Column(Integer, primary_key=True)
    user_name = Column(String(100), nullable=False)
    user_email = Column(String(100), nullable=False)


# Define the Order model
class Order(Base):
    __tablename__ = 'orders'

    
    order_id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    item_id = Column(Integer, ForeignKey('items.item_id'), nullable=False)
    order_quantity = Column(Integer, nullable=False)
    
    user = relationship("User")
    item = relationship("Item")


# Create the tables in the database if they don't exist
Base.metadata.create_all(engine)

# For demonstration purposes, we can create a session and add some example data
Session = sessionmaker(bind=engine)
session = Session()

# Add three items
new_item1 = Item(item_id=1, item_name='Pizza', item_price=15.82, item_quantity=100)
new_item2 = Item(item_id=2, item_name='Burger', item_price=2.82, item_quantity=100)
new_item3 = Item(item_id=3, item_name='Ramen', item_price=.45, item_quantity=300)
session.add(new_item1)
session.add(new_item2)
session.add(new_item3)

# Add three users
new_user1 = User(user_id=1, user_name='Dznpc Ucmrr', user_email='dznpc@example.com')
new_user2 = User(user_id=2, user_name='Anas Richa', user_email='anas@example.com')
new_user3 = User(user_id=3, user_name='Martin Elma', user_email='martin@example.com')
session.add(new_user1)
session.add(new_user2)
session.add(new_user3)
# Add some orders
new_order1 = Order(order_id=100, user_id=new_user1.user_id, item_id=new_item1.item_id, order_quantity=2)
new_order2 = Order(order_id=101, user_id=new_user1.user_id, item_id=new_item3.item_id, order_quantity=10)
new_order3 = Order(order_id=102, user_id=new_user3.user_id, item_id=new_item2.item_id, order_quantity=5)
session.add(new_order1)
session.add(new_order2)
session.add(new_order3)
session.commit()
# Close the session
session.close()
