$('.add_ship_heart').click(function(){
	$('.add_ship_dialog_path').css('top',($(this).position()['top'] + $(this).height() + 5))
							 .css('left', ($(this).position()['left'] - $('.add_ship_dialog').width() + $(this).parent().width()) + 5)
							 .animate({height: '285px'}, 500);
	$('.add_ship_dialog').css('top',($(this).position()['top'] + $(this).height() + 20))
						 .css('left', ($(this).position()['left'] - $('.add_ship_dialog').width() + $(this).parent().width()) + 5)
						 .animate({opacity: '1'}, 500);
	/*if($('.add_ship_dialog').css('visibility') == 'hidden'){
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
	}*/
});