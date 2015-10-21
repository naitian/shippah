#http://www.pythoncentral.io/introductory-tutorial-python-sqlalchemy/

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from database_setup import Base, Ship, User, Tag, ShipTag
from datetime import datetime
from shippah_crop import shippah_crop

database_path = 'sqlite:///shippah.db'

engine = create_engine(database_path)

Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
session = DBSession()
'''
def addShip(name, user_name_1, image_1, image_1_x_1, image_1_y_1, image_1_x_2, image_1_y_2, image_2_x_1, image_2_y_1, image_2_x_2, image_2_y_2, user_name_2, image_2, tags): 
	ship_name_tag = addTag(name)
	user_name_1 = addTag(user_name_1)
	user_name_2 = addTag(user_name_2)

	shippah_crop(image_1, image_1_x_1, , image_1_y_1, image_1_x_2, image_1_y_2, user_name_1.id)
	shippah_crop(image_2, image_2_x_1, , image_2_y_1, image_2_x_2, image_2_y_2, user_name_2.id)

	new_ship = Ship(name=ship_name_tag, user_1=User(user_name_1), user_2=User(user_name_2), time=datetime.now(), votes=0)
	session.add(new_ship)

	session.add(ShipTag(ship=new_ship, tag=ship_name_tag))
	session.add(ShipTag(ship=new_ship, tag=user_name_tag_1))
	session.add(ShipTag(ship=new_ship, tag=user_name_tag_2))
	
	for n in tags:
		new_tag = addTag(n)
		new_ship_tag = ShipTag(ship=new_ship, tag=new_tag)
		session.add(new_ship_tag)
	session.commit()
'''

def addShip(name, user_name_1, user_name_2, tags): 
	ship_name_tag = addTag(name)
	user_name_1 = addTag(user_name_1)
	user_name_2 = addTag(user_name_2)

	new_ship = Ship(name=ship_name_tag, user_1=User(name=user_name_1), user_2=User(name=user_name_2), time=datetime.now(), votes=0)
	session.add(new_ship)

	session.add(ShipTag(ship=new_ship, tag=ship_name_tag))
	session.add(ShipTag(ship=new_ship, tag=user_name_1))
	session.add(ShipTag(ship=new_ship, tag=user_name_2))
	
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


