from shippah_classes import *
from shippah_insert import *
while(True):
	ship_name = input("Name of Ship: ")
	
	user_name_1 = input("Name of first Person: ")
	image_path_1 = input("Image Path(leave blank for no image): ")
	if image_path_1!="":
		image_x_1 = input("Image x coordinate: ")
		image_y_1 = input("Image y coordinate: ")
		image_zoom_1 = input("Zoom: ")
	
	user_name_2 = input("Name of second Person: ")
	image_path_2 = input("Image Path(leave blank for no image): ")
	if image_path_2!="":
		image_x_2 = input("Image x coordinate: ")
		image_y_2 = input("Image y coordinate: ")
		image_zoom_2 = input("Zoom: ")

	tags = input("Type all tags separated by spaces: ").split(" ")
	
	image_1 = None
	image_2 = None

	if image_path_1!="":
		image_1 = Image_Item(image_x_1, image_y_1, image_zoom_1, image_path_1)
	if image_path_2!="":
		image_2 = Image_Item(image_x_2, image_y_2, image_zoom_2, image_path_2)
	user_1 = User_Item(user_name_1, image_1)
	user_2 = User_Item(user_name_2, image_2)
	addShip(ship_name, user_1, user_2, tags)