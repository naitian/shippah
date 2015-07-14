from flask import Flask, render_template, url_for, request, redirect, jsonify
from shippah_query import *

app = Flask(__name__)


from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database_setup import Base, Ship, User, Tag, ShipTag, Image

engine = create_engine('sqlite:///shippah.db')
Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)
session = DBSession()

@app.route('/api/get_ships/sortBy=<type>/')
def get_ships(type):
	if type == "recent":
		ships = get_recent(10);
	elif type == "popular":
		ships = get_popular(10);
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
	return jsonify(Ships=serial_array)
	

if __name__ == '__main__':
    app.debug = True
    app.run()
