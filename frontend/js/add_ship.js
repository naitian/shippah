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



/*
			<div class='edit_pic_1_dialog'>
				<div class='edit_pic_1_header'>
				</div>
				<div class='edit_pic_1_main'>
					<div class='edit_pic_1'>
					</div>
				</div>
			</div>
			<div class='add_ship_dialog'>
				<div class='add_ship_header'>
					<div class='add_ship_shipname'>
						<input placeholder='Shipname' spellcheck=false></input>
					</div>
				</div>
				<div class='add_ship_main'>
					<div class='add_ship_persons'>
						<input type='file' id='file_pic_1' style='display: none' name='file' />
						<input type='file' id='file_pic_2' style='display: none' name='file'/>
						<div class='add_ship_person_1'>
							<div class='add_ship_pic_1' style='background-image: url("http://www.aheritier.net/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"); background-size: 100% auto;'>
							</div>
							<div class='add_ship_name_1'>
								<input placeholder='Name 1' spellcheck=false></input>
							</div>
						</div>
						<div class='add_ship_person_2'>	
							<div class='add_ship_pic_2' style='background-image: url("http://www.aheritier.net/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"); background-size: 100% auto;'>
							</div>
							<div class='add_ship_name_2'>
								<input placeholder='Name 2' spellcheck=false></input>
							</div>
						</div>
					</div>
				</div>
				<div class='add_ship_tags'>
					<div class='add_ship_tags_input'>
						<input placeholder='Enter tags here...' spellcheck=false></input>
					</div>
					<div class='add_ship_tags_display'>
						<p></p>
					</div>
				</div>
				<div class='add_ship_button'>
					<input type='button' value='ship'></input>
				</div>
			</div>
			<div class='edit_pic_2_dialog'>
				<div class='edit_pic_2_header'>
					
				</div>
				<div class='edit_pic_2_main'>
					<div class='edit_pic_2'>
					</div>
				</div>
			</div>*/
			

var addShipTemplate = "" +
"<div class='edit_pic_1_dialog'>" +
	"<div class='edit_pic_1_header'>" +
	"</div>" +
	"<div class='edit_pic_1_main'>" +
		"<div class='edit_pic_1'>" +
		"</div>" +
	"</div>" +
"</div>" +
"<div class='add_ship_dialog'>" +
	"<div class='add_ship_header'>" +
		"<div class='add_ship_shipname'>" +
			"<input placeholder='Shipname' spellcheck=false></input>" +
		"</div>" +
	"</div>" +
	"<div class='add_ship_main'>" +
		"<div class='add_ship_persons'>" +
			"<input type='file' id='file_pic_1' style='display: none' name='file' />" +
			"<input type='file' id='file_pic_2' style='display: none' name='file'/>" +
			"<div class='add_ship_person_1'>" +
				"<div class='add_ship_pic_1' style='background-image: url(\"http://www.aheritier.net/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png\"); background-size: 100% auto;'>" +
				"</div>" +
				"<div class='add_ship_name_1'>" +
					"<input placeholder='Name 1' spellcheck=false></input>" +
				"</div>" +
			"</div>" +
			"<div class='add_ship_person_2'>" +	
				"<div class='add_ship_pic_2' style='background-image: url(\"http://www.aheritier.net/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png\"); background-size: 100% auto;'>" +
				"</div>" +
				"<div class='add_ship_name_2'>" +
					"<input placeholder='Name 2' spellcheck=false></input>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>" +
	"<div class='add_ship_tags'>" +
		"<div class='add_ship_tags_input'>" +
			"<input placeholder='Enter tags here...' spellcheck=false></input>" +
		"</div>" +
		"<div class='add_ship_tags_display'>" +
			"<p></p>" +
		"</div>" +
	"</div>" +
	"<div class='add_ship_button'>" +
		"<input type='button' value='ship'></input>" +
	"</div>" +
"</div>" +
"<div class='edit_pic_2_dialog'>" +
	"<div class='edit_pic_2_header'>" +	
	"</div>" +
	"<div class='edit_pic_2_main'>" +
		"<div class='edit_pic_2'>" +
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

$('.add_ship_heart').on('click', function(){
	$('.add_ship').html(addShipTemplate);
	$('.overlay').css('z-index','1');
	$('.add_ship').css('visibility', 'visible').css('z-index', '2');
	$('.add_ship_dialog').css('left','calc(50% - ' +  $('.add_ship_dialog').width() / 2 + 'px)')
						 .css('top','calc(50% - ' +  $('.add_ship_dialog').height() / 2 + 'px)');
});

$('.add_ship').click(function(ev){
	if(ev.target.getAttribute('class') == 'add_ship'){
		$('.overlay').css('z-index','-1');
		$('.add_ship').html('');
		$('.add_ship').css('visibility', 'hidden').css('z-index', '-1');
		if(editPic1Select)
			editPic1Select.cancelSelection();
		if(editPic2Select)
			editPic2Select.cancelSelection();
	} else if(ev.target.getAttribute('class') == 'add_ship_pic_1'){
		$('#file_pic_1').trigger('click');
	} else if(ev.target.getAttribute('class') == 'add_ship_pic_2'){
		$('#file_pic_2').trigger('click');
	}
});

$(document).on('keydown', '.add_ship_tags_input input', function(ev){
	if(ev.keyCode == 13){
		if($('.add_ship_tags_input input').val() != ''){
			if($('.add_ship_tags_display p').html() == ''){
				$('.add_ship_tags_display p').html('Tags: ' + $('.add_ship_tags_input input').val());
			} else {
				$('.add_ship_tags_display p').html($('.add_ship_tags_display p').html() + ', ' + $('.add_ship_tags_input input').val());
			}
			$('.add_ship_tags_input input').val('');
		}
	}
});

$(document).on('change', '#file_pic_1', function(){
	if(this.files[0].type.indexOf('image') == -1){
		console.log('File not a support image type');
		return;
	}
	if(this.files[0].size / 1024 / 1024 > 5){
		console.log('Upload an image more than 5MB');
		return;
	}
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
				handles: 'corners',
				x1: 0,
				y1: 0,
				x2: 100,
				y2: 100,
				onInit: previewPic1,
				onSelectChange: previewPic1,
				instance: true,
			});
		}
	};
});


$(document).on('change', '#file_pic_2', function(){
	if(this.files[0].type.indexOf('image') == -1){
		console.log('File not a support image type');
		return;
	}
	if(this.files[0].size / 1024 / 1024 > 5){
		console.log('Upload an image more than 5MB');
		return;
	}
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
				handles: 'corners',
				x1: 0,
				y1: 0,
				x2: 100,
				y2: 100,
				onInit: previewPic2,
				onSelectChange: previewPic2,
				instance: true,
			});
		}
	};
});