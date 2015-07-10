class User_Item:
	def __init__(self, name, image=None):
		self.n = name
		self.i = image
	def getName(self):
		return self.n
	def getImage(self):
		return self.i

class Image_Item:
	def __init__(self, x_coord, y_coord, path):
		self.x = x_coord
		self.y = y_coord
		self.p = path
	def getX(self):
		return self.x
	def getY(self):
		return self.y
	def getPath(self):
		return self.p

class Ship_Item:
	def __init__(self, name, user_1, user_2, votes):
		self.n = name
		self.u1 = user_1
		self.u2 = user_2
		self.v = votes
	def getName(self):
		return self.n
	def getUser1(self):
		return self.u1
	def getUser2(self):
		return self.u2
	def getVotes(self):
		return votes