
var myFirebaseRef = new Firebase("https://shippah.firebaseio.com/");

myFirebaseRef.once("value", function(snapshot) {
  snapshot.forEach(function(ship) {
    	addShipToHTML(ship.child("ship_name").val(), ship.child('user_name_1').val(), 'test1', ship.child('user_name_2').val(), 'test2', ship.child('tags').val());
  });
});

$(document).on('click', '.add_ship_button input', function(){
	rawTags = $('.add_ship_tags_input input').val();
	tagsList = rawTags.replace('Tags:','').replace(/\s/g,'').split(',');
	myFirebaseRef.push({
		ship_name: $('.add_ship_shipname input').val(),
		user_name_1: $('.add_ship_name_1 input').val(),
		user_name_2: $('.add_ship_name_2 input').val(),
		tags: tagsList
	});
	location.reload();
});