
var myFirebaseRef = new Firebase("https://shippah.firebaseio.com/");

myFirebaseRef.once("value", function(snapshot) {
  snapshot.forEach(function(ship) {
    	addShipToHTML(ship.child("ship_name").val(), ship.child('user_name_1').val(), ship.child('image_1').val(), ship.child('user_name_2').val(), ship.child('image_2').val(), ship.child('tags').val());
  });
});

$(document).on('click', '.add_ship_button input', function(){
	rawTags = $('.add_ship_tags_input input').val();
	tagsList = rawTags.replace('Tags:','').replace(/\s/g,'').split(',');
	var image_1_style = $('.add_ship_pic_1').attr('style');
	//default image style is in display_ships
	if(image_1_style === defaulImageStyle){
		image_1_style = "";
	}

	var image_2_style = $('.add_ship_pic_2').attr('style');
	if(image_2_style === defaulImageStyle){
		image_2_style = "";
	}
	console.log(image_1_style.indexOf('(')+1, image_1_style.lastIndexOf(')'));
	myFirebaseRef.push({
		ship_name: $('.add_ship_shipname input').val(),
		user_name_1: $('.add_ship_name_1 input').val(),
		user_name_2: $('.add_ship_name_2 input').val(),
		image_1: image_1_style,
		image_2: image_2_style,
		tags: tagsList
	}, function(){
		location.reload();

	});
});