var cardTemplate = "<div><div class='card_header'>" +
	"<div class='card_title'>" +
		"<p>[SHIPNAME]</p>" +
	"</div>" +
"</div>" +
"<div class='card_main'>" +
	"<div class='card_persons'>" +
		"<div class='card_person_1'>" +
			"<div class='card_pic_1' style='background-url: url(\"[PIC_1]\"); background-position: [POS_X_1]% [POS_Y_1]%; background-size: [SCALE_1]% auto;'>" +
			"</div>" +
			"<div class='card_name_1'>" +
				"<p>[NAME_1]</p>" +
			"</div>" +
		"</div>" +
		"<div class='card_person_2' style='background-url: url(\"[PIC_1]\"); background-position: [POS_X_1]% [POS_Y_1]%; background-size: [SCALE_1]% auto;'>" +	
			"<div class='card_pic_2'>" +
			"</div>" +
			"<div class='card_name_2'>" +
				"<p>[NAME_2]</p>" +
			"</div>" +
		"</div>" +
	"</div>" +
"</div></div>";

function addShipToHTML(shipname, name_1, pic_1, pos_x_1, pos_y_1, scale_1, name_2, pic_2, pos_x_2, pos_y_2, scale_2){
	template = cardTemplate.slice(0);
	console.log(shipname);
	template = template.replace("[SHIPNAME]", shipname);
	template = template.replace("[NAME_1]",name_1)
	template = template.replace("[PIC_1]", pic_1)
	template = template.replace("[POS_X_1]", pos_x_1)
	template = template.replace("[POS_Y_1]", pos_y_1)
	template = template.replace("[SCALE_1]", scale_1)
	template = template.replace("[NAME_2]",name_2)
	template = template.replace("[PIC_2]", pic_2)
	template = template.replace("[POS_X_2]", pos_x_2)
	template = template.replace("[POS_Y_2]", pos_y_2)
	template = template.replace("[SCALE_2]", scale_2);
	$('.ships').html($('.ships').html() + template);
}

$('.add_ship_heart').click(function(){
	addShipToHTML('OBrocolli', 'Barack', '', '', '', '', 'Obama', '', '', '', '');
	/*
	if($('.add_ship_dialog').css('opacity') == 0){
		/*$('.add_ship_dialog_path').css('top',($(this).position()['top'] + $(this).height() + 5))
								 .css('left', ($(this).position()['left'] - $('.add_ship_dialog').width() + $(this).parent().width()) + 5)
								 .animate({height: '285px'}, 250);
		$('.add_ship_dialog').css('top',($(this).position()['top'] + $(this).height() - 6))
							 .css('left', ($(this).position()['left'] - $('.add_ship_dialog').width() + $(this).parent().width() / 2) + 5)
							 .animate({opacity: 1}, 100)
		/*$('.add_ship_triangle').css('left',$('.add_ship_dialog').width() - $('.add_ship_triangle').width() - 9.5)
							   .css('bottom', $('.add_ship_dialog').height() - 45)
							   .delay(125)
							   .animate({opacity: '1'}, 250);
	} else {
		$('.add_ship_dialog').animate({opacity: 0}, 100);
		$('.add_ship_triangle').animate({opacity: '0'}, 250);
		$('.add_ship_dialog_path').delay(125)
								  .animate({height: '0px'}, 250)
	}*/
});