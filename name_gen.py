def ship_name(name1, name2):
	name1 = name1.lower()
	name2 = name2.lower()
	name1_list = list(name1)
	indices = []
	potential_names = []
	for letter in name1_list:
		if letter in name2:
			indices.append(name1.find(letter))
	print indices
	for index in indices:
		potential_names.append(name1[0:index + 1] + name2[name2.find(name1[index]) + 1:])
		potential_names.append(name2[0:name2.find(name1[index]) + 1] + name1[index + 1:])
	for name in potential_names:
		print potential_names
		print name
		if name in name1 or name in name2:
			continue
		else:
			return name.title()
	return (name1[0] + name2[:len(name2) + 1]).title()