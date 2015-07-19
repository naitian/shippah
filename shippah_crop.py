from os import remove
from PIL import Image 
def shippah_crop(originalFilePath, x1, y1, x2, y2, newFilePath):
	original_img = Image.open(originalFilePath)
	new_img = img.crop(x1, y2, x2, y2)
	new_img.save(newFilePath)
	os.remove(originalFilePath)