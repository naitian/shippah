$('#add_ship_button input').click(function(){
	if($('.add_ship_dialog').css('visibility') == 'hidden'){
		console.log($(this))
		$('.add_ship_dialog').css('visibility','visible')
							 .css('top',($(this).position()['top'] + $(this).height() + 20))
							 .css('left', ($(this).position()['left'] - $('.add_ship_dialog').width() + $(this).parent().width()) + 5);
		$('.add_ship_triangle').css('visibility','visible')
							   .css('left',$('.add_ship_dialog').width() - $('.add_ship_triangle').width() - 25)
							   .css('bottom', $('.add_ship_dialog').height());
	} else {
		$('.add_ship_dialog').css('visibility','hidden');
		$('.add_ship_triangle').css('visibility','hidden');
	}
});