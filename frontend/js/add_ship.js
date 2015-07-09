var cardTemplate = "" +
"<div>" +
	"<div class='card_header'>" +
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
	"</div>" +
"</div>";


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

function createObjectURL(object) {
	if(window.URL){
		return window.URL.createObjectURL(object);
	} else {
		return window.webkitURL.createObjectURL(object);
	}
}

$('.add_ship_heart').click(function(){
	$('.overlay').css('z-index','1');
	$('.add_ship').css('visibility', 'visible').css('z-index', '2');
	$('.add_ship_dialog').css('left','calc(50% - ' +  $('.add_ship_dialog').width() / 2 + 'px)')
						 .css('top','calc(50% - ' +  $('.add_ship_dialog').height() / 2 + 'px)');
});

$('.add_ship_dialog').click(function(e) {
    e.stopPropagation();
});

$('.add_ship').click(function(){$('.overlay').css('z-index','-1');
		$('.add_ship').css('visibility', 'hidden').css('z-index', '-1');
});

$('.add_ship_pic_1').click(function(){
	$('#file_pic_1').trigger('click');
});

$('.add_ship_pic_2').click(function(){
	$('#file_pic_2').trigger('click');
});

$('#file_pic_1').on('change', function(ev){
	$('.add_ship_pic_1').unbind('click');
	files = ev.target.files;
	var reader = new FileReader();
	reader.onload = (function(theFile) {
        return function(e) {
          $('.add_ship_pic_1').css('background','url("' + e.target.result + '")');
        };
      })(files[0]);
	reader.readAsDataURL(files[0]);
	$('.add_ship_pic_1').val('1');
});

$('#file_pic_2').on('change', function(ev){
	$('.add_ship_pic_2').unbind('click');
	files = ev.target.files;	
	var reader = new FileReader();
	reader.onload = (function(theFile) {
        return function(e) {
          $('.add_ship_pic_2').css('background','url("' + e.target.result + '")');
        };
      })(files[0]);
	reader.readAsDataURL(files[0]);
	$('.add_ship_pic_2').val('1');
});


$('.add_ship_pic_1').mousedown(function(ev){
	if($('.add_ship_pic_1').val() == '1'){
		initX = ev.pageX;
		initY = ev.pageY;
	}
});

$('.add_ship_pic_1').mousemove(function(ev){
	if($('.add_ship_pic_1').val() == '1'){
		initX = ev.pageX;
		initY = ev.pageY;
	}
});