import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

Base = declarative_base()

database_path = 'sqlite:///shippah.db'

class Tag(Base):
    __tablename__ = 'tag'
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False, unique=True)


class User(Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True)
    name_id = Column(Integer, ForeignKey(Tag.id), nullable=False)
    name = relationship(Tag)
    image = Column(String(250))


class Ship(Base):
    __tablename__ = 'ship'
    id = Column(Integer, primary_key=True)
    name_id = Column(Integer, ForeignKey(Tag.id), nullable=False)
    name = relationship(Tag)
    user_id_1 = Column(Integer, ForeignKey(User.id), nullable=False)
    user_1 = relationship(User, foreign_keys=[user_id_1])
    user_id_2 = Column(Integer, ForeignKey(User.id), nullable=False)
    user_2 = relationship(User, foreign_keys=[user_id_2])
    time = Column(DateTime, nullable=False)
    votes = Column(Integer, nullable=False)


class ShipTag(Base):
    __tablename__ = 'ship_tag'
    id = Column(Integer, primary_key=True)
    ship_id = Column(String(250), ForeignKey(Ship.id), nullable=False)
    ship = relationship(Ship)
    tag_id = Column(String(250), ForeignKey(Tag.id), nullable=False)
    tag = relationship(Tag)


engine = create_engine(database_path)
Base.metadata.create_all(engine)
