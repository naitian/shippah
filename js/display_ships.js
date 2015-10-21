/*var cardTemplate = "" +
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
"</div>";*/

var cardTemplate = "" +
"<div id='[SHIP_ID]'>" +
	"<div class='card_header'>" +
		"<div class='card_title'>" +
			"<p>[SHIPNAME]</p>" +
		"</div>" +
	"</div>" +
	"<div class='card_main'>" +
		"<div class='card_persons'>" +
			"<div class='card_person_1'>" +
				"<div class='card_pic_1' style='background-image: url(\"[PIC_1]\"); background-size: 200% auto;'>" +
				"</div>" +
				"<div class='card_name_1'>" +
					"<p>[NAME_1]</p>" +
				"</div>" +
			"</div>" +
			"<div class='card_person_2'>" +
				"<div class='card_pic_2' style='background-image: url(\"[PIC_2]\"); background-size: 100% auto;'>" +
				"</div>" +
				"<div class='card_name_2'>" +
					"<p>[NAME_2]</p>" +
				"</div>" +
			"</div>" +
		"</div>" +
		"<div class='card_tags'>" +
			"<p>[TAGS]</p>" +
		"</div>" +
	"</div>" +
"</div>";

function addShipToHTML(shipname, name_1, pic_1, name_2, pic_2, tags){
	template = cardTemplate.slice(0);
	console.log(shipname + ' | ' + name_1 + ' | ' + name_2);
	template = template.replace("[SHIPNAME]", shipname);
	template = template.replace("[NAME_1]",name_1);
	template = template.replace("[PIC_1]", pic_1);
	template = template.replace("[NAME_2]",name_2);
	template = template.replace("[PIC_2]", pic_2);
	formattedTags = '';
	for(var cnt = 0; cnt < tags.length; cnt++){
		if(cnt == 0)
			formattedTags += tags[cnt];
		else
			formattedTags += (', ' + tags[cnt]);
	}
	template = template.replace('[TAGS]', formattedTags);
	
	$('.ships').html($('.ships').html() + template);
}