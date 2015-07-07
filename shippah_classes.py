class User_Item:
	def __init__(self, name, image):
		self.n = name
		self.i = image
	def getName():
		return self.n
	def getImage():
		return self.i

class Image_Item:
	def __init__(self, x_coord, y_coord, path):
		self.x = x_coord
		self.y = y_coord
		self.p = path
	def getX():
		return self.x
	def getY():
		return self.y
	def getPath():
		return self.p

class Ship_Item:
	def __init__(self, name, user_1, user_2, votes):
		self.n = name
		self.u1 = user_1
		self.u2 = user_2
		self.v = votes
	def getName():
		return self.n
	def getUser1():
		return self.u1
	def getUser2():
		return self.u2
	def getVotes():
		return votes