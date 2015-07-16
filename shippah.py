from flask import Flask, render_template, url_for, request, redirect, jsonify
from shippah_query import *
from shippah_increment import *

app = Flask(__name__)


from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database_setup import Base, Ship, User, Tag, ShipTag, Image

engine = create_engine('sqlite:///shippah.db')
Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)
session = DBSession()

@app.route('/api/get_ships_by_tag/', methods=['POST'])
def get_ships_by_tag():
	tagsList = request.get_json()
	ships = get_tags(10, tagsList)
	
	return jsonify(Ships=ships)

@app.route('/api/get_ships/sortBy=<type>/')
def get_ships(type):
	if type == "recent":
		ships = get_recent(10);
	elif type == "popular":
		ships = get_popular(10);
	return jsonify(Ships=ships)
	

if __name__ == '__main__':
    app.debug = True
    app.run()
