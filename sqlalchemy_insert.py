#http://www.pythoncentral.io/introductory-tutorial-python-sqlalchemy/

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from sqlalchemy_declarative import Ship, User, Tag, Ship_Tag, Image

database_path = 'some database_path'

engine = create_engine(database_path)

Base.metadata.bind = engine

DBSession = sessionmaker(bind=engine)
session = DBSession()

def addShip(name, user_item_1, user_item_2, tags, votes):
	tags.append(user_item_1.getName())
	tags.append(user_item_2.getName())
	tags.append(name)

	user_1 = addUser(user_item_1)
	user_2 = addUser(user_item_2)
	new_ship = Ship(name=name, user_1=user_1, user_2=user_2, votes=votes)
	session.add(new_ship)

	for n in tags:
		try:
			new_tag = session.query(Tag).filter(Tag.name==n).one():
		except:
			new_tag = Tag(name=n)
			session.add(new_tag)
		new_ship_tag = Ship_Tag(new_ship, new_tag)
		session.add(new_ship_tag)
	session.commit()


def addUser(user):
	image = user.getImage()
	new_image = Image(x_coord=image.getX(), y_coord=image.getY(), path=image.getPath())
	session.add(new_image)

	new_user = User(user.getName(), new_image)
	session.add(new_user)
	return user

