import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

Base = declarative_base()

database_path = 'sqlite:///shippah.db'


class Image(Base):
    __tablename__ = 'image'
    id = Column(Integer, primary_key=True)
    x_coord = Column(Integer, nullable=False)
    y_coord = Column(Integer, nullable=False)
    path = Column(String(250), nullable=False)


class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    image_id = Column(Integer, ForeignKey(image.id))
    image = relationship(Image)


class Ship(Base):
    __tablename__ = 'ship'
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)
    user_id_1 = Column(Integer, ForeignKey(user.id), nullable=False)
    user_1 = relationship(User)
    user_id_2 = Column(Integer, ForeignKey(user.id), nullable=False)
    user_2 = relationship(User)
    time = Column(DateTime, nullable=False)
    votes = Column(Integer, nullable=False)


class Tag(Base):
    __tablename__ = 'tag'
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False, unique=True)


class ShipTag(Base):
    __tablename__ = 'ship_tag'
    id = Column(Integer, primary_key=True)
    ship_id = Column(String(250), ForeignKey(ship.id), nullable=False)
    ship = relationship(Ship)
    tag_id = Column(String(250), ForeignKey(tag.id), nullable=False)
    tag = relationship(Tag)


engine = create_engine(database_path)
Base.metadata.create_all(engine)
