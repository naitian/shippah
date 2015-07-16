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


var editPic1Select, editPic2Select;


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

function previewPic1(img, selection){
	var imgWidth = parseFloat($('.edit_pic_1').css('width').substring(0, $('.edit_pic_1').css('width').indexOf('px')));
	var imgHeight = parseFloat($('.edit_pic_1').css('height').substring(0, $('.edit_pic_1').css('height').indexOf('px')));
	var xscale = 100 * imgWidth / selection.width;
	var yscale = 100 * imgHeight / selection.height;
	var scale = imgWidth > imgHeight ? xscale : yscale;
	console.log(scale);
	$('.add_ship_pic_1').css('background-size', scale + '% auto')
						.css('background-position', (-selection.x1 * scale / 100 * 128 / imgWidth) + 'px ' + (-selection.y1 * yscale / 100 * 128 / imgHeight) + 'px');
}

function previewPic2(img, selection){
	var imgWidth = parseFloat($('.edit_pic_2').css('width').substring(0, $('.edit_pic_2').css('width').indexOf('px')));
	var imgHeight = parseFloat($('.edit_pic_2').css('height').substring(0, $('.edit_pic_2').css('height').indexOf('px')));
	var xscale = 100 * imgWidth / selection.width;
	var yscale = 100 * imgHeight / selection.height;
	var scale = imgWidth > imgHeight ? xscale : yscale;
	console.log(scale);
	$('.add_ship_pic_2').css('background-size', scale + '% auto')
						.css('background-position', (-selection.x1 * scale / 100 * 128 / imgWidth) + 'px ' + (-selection.y1 * yscale / 100 * 128 / imgHeight) + 'px');
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

$('.edit_pic_1_dialog').click(function(e) {
    e.stopPropagation();
});

$('.edit_pic_2_dialog').click(function(e) {
    e.stopPropagation();
});

$('.add_ship').click(function(){
	$('.overlay').css('z-index','-1');
	$('.add_ship').css('visibility', 'hidden').css('z-index', '-1');
	if(editPic1Select)
		editPic1Select.cancelSelection();
	if(editPic2Select)
		editPic2Select.cancelSelection();
});

$('.add_ship_pic_1').click(function(){
	$('#file_pic_1').trigger('click');
});

$('.add_ship_pic_2').click(function(){
	$('#file_pic_2').trigger('click');
});

$('#file_pic_1').on('change', function(){
	$('.edit_pic_1_dialog').css('visibility','visible')
						   .css('left','calc(50% - ' + ($('.add_ship_dialog').width() / 2 + $('.edit_pic_1_dialog').width() + 20) + 'px)')
						   .css('top','calc(50% - ' +  $('.edit_pic_1_dialog').height() / 2 + 'px)');
	
	var reader = new FileReader();
	var img = new Image();
	reader.readAsDataURL(this.files[0]);
	reader.onload = function(ev){
		img.src = ev.target.result;
		img.onload = function(){
			$('.edit_pic_1').css('background','url("' + img.src +'") no-repeat');
			$('.add_ship_pic_1').css('background','url("' + img.src +'") no-repeat');
			console.log($('.edit_pic_1').css('width') + ' | ' + $('.edit_pic_1').css('height'));
			if(this.width >= this.height){
				$('.edit_pic_1').css('background-size','100% auto');
				var ratio = parseInt($('.edit_pic_1').css('width').substring(0, $('.edit_pic_1').css('width').indexOf('px'))) / this.width;
				$('.edit_pic_1').css('width', this.width * ratio);
				$('.edit_pic_1').css('height', this.height * ratio);
			} else {
				$('.edit_pic_1').css('background-size','auto 100%');
				var ratio = parseInt($('.edit_pic_1').css('height').substring(0, $('.edit_pic_1').css('height').indexOf('px'))) / this.height;
				console.log(this.width + ' ' + this.height);
				$('.edit_pic_1').css('width', this.width * ratio);
				$('.edit_pic_1').css('height', this.height * ratio);
			}
			$('.add_ship_pic_1').css('background-size', $('.edit_pic_1').css('background-size'));
			editPic1Select = $('.edit_pic_1').imgAreaSelect({
				aspectRatio: '1:1',
				handles: true,
				x1: 0,
				y1: 0,
				x2: 100,
				y2: 100,
				onSelectChange: previewPic1,
				instance: true,
			});
		}
	};
});


$('#file_pic_2').on('change', function(){
	$('.edit_pic_2_dialog').css('visibility','visible')
						   .css('left','calc(50% + ' + ($('.add_ship_dialog').width() / 2 + 20) + 'px)')
						   .css('top','calc(50% - ' +  $('.edit_pic_2_dialog').height() / 2 + 'px)');
	
	var reader = new FileReader();
	var img = new Image();
	reader.readAsDataURL(this.files[0]);
	reader.onload = function(ev){
		img.src = ev.target.result;
		img.onload = function(){
			$('.edit_pic_2').css('background','url("' + img.src +'") no-repeat');
			$('.add_ship_pic_2').css('background','url("' + img.src +'") no-repeat');
			if(this.width >= this.height){
				$('.edit_pic_2').css('background-size','100% auto');
				var ratio = parseInt($('.edit_pic_2').css('width').substring(0, $('.edit_pic_2').css('width').indexOf('px'))) / this.width;
				$('.edit_pic_2').css('width', this.width * ratio);
				$('.edit_pic_2').css('height', this.height * ratio);
			} else {
				$('.edit_pic_2').css('background-size','auto 100%');
				var ratio = parseInt($('.edit_pic_2').css('height').substring(0, $('.edit_pic_2').css('height').indexOf('px'))) / this.height;
				$('.edit_pic_2').css('width', this.width * ratio);
				$('.edit_pic_2').css('height', this.height * ratio);
			}
			$('.add_ship_pic_2').css('background-size', $('.edit_pic_2').css('background-size'));
			editPic2Select = $('.edit_pic_2').imgAreaSelect({
				aspectRatio: '1:1',
				handles: true,
				x1: 0,
				y1: 0,
				x2: 100,
				y2: 100,
				onSelectChange: previewPic2,
				instance: true,
			});
		}
	};
});