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
				"<div class='card_pic_1' style='[PIC_1]'>" +
				"</div>" +
				"<div class='card_name_1'>" +
					"<p>[NAME_1]</p>" +
				"</div>" +
			"</div>" +
			"<div class='card_person_2'>" +
				"<div class='card_pic_2' style='[PIC_2]'>" +
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
var defaulImageStyle = 'background-image: url("http://www.aheritier.net/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"); background-size: 100% auto;'

function addShipToHTML(shipname, name_1, pic_1, name_2, pic_2, tags){
	template = cardTemplate.slice(0);
	if(pic_1===""){
		pic_1 = defaulImageStyle;
	}
	if(pic_2===""){
		pic_2 = defaulImageStyle;
	}
	//console.log(shipname + ' | ' + name_1 + ' | ' + name_2);
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