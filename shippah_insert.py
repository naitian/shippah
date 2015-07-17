#http://www.pythoncentral.io/introductory-tutorial-python-sqlalchemy/

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from database_setup import Base, Ship, User, Tag, ShipTag, Image
from shippah_classes import User_Item, Image_Item, Ship_Item
from datetime import datetime

database_path = 'sqlite:///shippah.db'

engine = create_engine(database_path)

Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
session = DBSession()

def addShip(name, user_name_1, image_1, user_name_2, image_2, tags): 
	ship_name_tag = addTag(name)
	user_name_1 = addTag(user_name_1)
	user_name_2 = addTag(user_name_2)

	new_ship = Ship(name=ship_name_tag, user_1=User(user_name_1, image_1), user_2=User(user_name_2, image_2), time=datetime.now(), votes=0)
	session.add(new_ship)

	session.add(ShipTag(ship=new_ship, tag=ship_name_tag))
	session.add(ShipTag(ship=new_ship, tag=user_name_tag_1))
	session.add(ShipTag(ship=new_ship, tag=user_name_tag_2))
	
	for n in tags:
		new_tag = addTag(n)
		new_ship_tag = ShipTag(ship=new_ship, tag=new_tag)
		session.add(new_ship_tag)
	session.commit()


def addTag(name):
	try:
		new_tag = session.query(Tag).filter(Tag.name==name).one()
	except:
		new_tag = Tag(name=name)
		session.add(new_tag)
	return new_tag


