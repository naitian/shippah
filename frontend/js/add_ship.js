$('.add_ship_heart').click(function(){
	if($('.add_ship_dialog').css('opacity') == 0){
		$('.add_ship_dialog_path').css('top',($(this).position()['top'] + $(this).height() + 5))
								 .css('left', ($(this).position()['left'] - $('.add_ship_dialog').width() + $(this).parent().width()) + 5)
								 .animate({height: '285px'}, 250);
		$('.add_ship_dialog').css('top',($(this).position()['top'] + $(this).height() + 20))
							 .css('left', ($(this).position()['left'] - $('.add_ship_dialog').width() + $(this).parent().width()) + 5)
							 .delay(125)
							 .animate({opacity: '1'}, 250);
		$('.add_ship_triangle').css('left',$('.add_ship_dialog').width() - $('.add_ship_triangle').width() - 25)
							   .css('bottom', $('.add_ship_dialog').height())
							   .delay(125)
							   .animate({opacity: '1'}, 250);
	} else {
		$('.add_ship_dialog').animate({opacity: '0'}, 250);
		$('.add_ship_triangle').animate({opacity: '0'}, 250);
		$('.add_ship_dialog_path').delay(125)
								  .animate({height: '0px'}, 250)
	}
});