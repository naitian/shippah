
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
	
def get_popular(num):
	return session.query(Ship).order_by(desc(Ship.votes)).limit(num).all()
