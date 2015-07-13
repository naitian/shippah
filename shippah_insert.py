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

def addShip(name, user_item_1, user_item_2, tags): #removed votes here
	user_1, user_name_tag_1 = addUser(user_item_1)
	user_2, user_name_tag_2 = addUser(user_item_2)
	ship_name_tag = addTag(name)
	new_ship = Ship(name=ship_name_tag, user_1=user_1, user_2=user_2, time=datetime.now(), votes=0)
	session.add(new_ship)

	session.add(ShipTag(ship=new_ship, tag=ship_name_tag))
	session.add(ShipTag(ship=new_ship, tag=user_name_tag_1))
	session.add(ShipTag(ship=new_ship, tag=user_name_tag_2))
	for n in tags:
		new_tag = addTag(n)
		new_ship_tag = ShipTag(ship=new_ship, tag=new_tag)
		session.add(new_ship_tag)
	session.commit()


def addUser(user):
	if user.getImage():
		image = user.getImage()
		new_image = Image(x_coord=image.getX(), y_coord=image.getY(), zoom=image.getZoom(), path=image.getPath())
		session.add(new_image)
	else:
		new_image=None
	new_tag = addTag(user.getName())
	new_user = User(name=new_tag, image=new_image)
	session.add(new_user)
	return new_user, new_tag

def addTag(name):
	try:
		new_tag = session.query(Tag).filter(Tag.name==name).one()
	except:
		new_tag = Tag(name=name)
		session.add(new_tag)
	return new_tag


