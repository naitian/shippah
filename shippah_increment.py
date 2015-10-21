
from datetime import datetime

from sqlalchemy import create_engine, desc, update
from sqlalchemy.orm import sessionmaker
from database_setup import Base, Ship, User, Tag, ShipTag

engine = create_engine('sqlite:///shippah.db')
Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)
session = DBSession()

def incrementVote(my_ship_id):
	ship = session.query(Ship).filter_by(id=my_ship_id).first()
	ship.votes+=1
	session.commit()
