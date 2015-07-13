
from shippah_classes import User_Item, Image_Item, Ship_Item
from datetime import datetime

from sqlalchemy import create_engine, desc
from sqlalchemy.orm import sessionmaker
from database_setup import Base, Ship, User, Tag, ShipTag, Image

engine = create_engine('sqlite:///shippah.db')
Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)
session = DBSession()


def get_recent(num):
	return session.query(Ship).order_by(desc(Ship.time)).limit(num).all()
	
<<<<<<< HEAD
def get_popular(num):
	return session.query(Ship).order_by(desc(Ship.votes)).limit(num).all()
=======
	serial_array =  []
	for ship in ships:
		tags = []
		tags_query = session.query(ShipTag).filter_by(ship_id = ship.id).all()
		for tag in tags_query:
			tags.append(tag.tag.name)

		serial_array.append({
				'id': ship.id,
				'name': ship.name.name,
				'users': {
					'user1': {
						'name': ship.user_1.name.name,

					},
					'user2': {
						'name': ship.user_2.name.name,

					},
				},
				'time': ship.time,
				'votes': ship.votes,
				'tags': tags,
			})
	return serial_array

def get_recent_tags(num, tagsList):
	ships = session.query(Ship).order_by(desc(Ship.time)).limit(num).all()
	serial_array =  []
	for ship in ships:
		tags = []
		tags_query = session.query(ShipTag).filter_by(ship_id = ship.id).all()
		for tag in tags_query:
			tags.append(tag.tag.name)

		serial_array.append({
				'id': ship.id,
				'name': ship.name.name,
				'users': {
					'user1': {
						'name': ship.user_1.name.name,

					},
					'user2': {
						'name': ship.user_2.name.name,

					},
				},
				'time': ship.time,
				'votes': ship.votes,
				'tags': tags,
			})
	return serial_array
>>>>>>> 2fe82e7ee304de6f995bd1c75c057b0b7ff060b6
