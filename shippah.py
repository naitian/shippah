from flask import Flask, render_template, url_for, request, redirect, jsonify, json
from urllib import unquote
from shippah_query import *
from shippah_increment import *

app = Flask(__name__, static_folder='/home/muakasan/Documents/shippah/static')

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from database_setup import Base, Ship, User, Tag, ShipTag
from shippah_insert import addShip

engine = create_engine('sqlite:///shippah.db')
Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)
session = DBSession()

@app.route('/')
def home():
    return render_template('index.html')

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

@app.route('/create_ship', methods=["POST"])
def createUser():
	json = request.get_json()
	if json:
		ship_name =  json['ship_name']
		user_name_1 = json['user_name_1']
		user_name_2 = json['user_name_2']
		tags = json['tags']
		addShip(ship_name, user_name_1, user_name_2, tags)
		return render_template("index.html")
	return render_template("index.html")


if __name__ == '__main__':
    app.debug = True
    app.run()
