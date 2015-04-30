/**
*       --------------------------------------------------------------------
*       Created by: Ana Cabrera   Date: 10 March 2015   Version: 1.0
*       Last edit by: --          Date: --
*       --------------------------------------------------------------------
*
*   List Action
*   -----------
*   - Save email
*   - Add component in email body
*   - Drag component on email body
**/

function addBlock(e){
	var data = e.data(),
		name = data.type+'-'+data.column,
		eNumType = 1,
		eType = "",
		html = "";

	if (data.type == 'text') {
		
		while( eNumType ){
			
			eType = 'text-'+eNumType;

			if(name == eType){

				html = blockTextColumns(data);
				e.html(html);

				eNumType = ( eNumType - 1) - eNumType ;

			}

			eNumType++;

		}

		return true;

	}else if(data.type == 'img') {
		
		while( eNumType ){
			
			eType = 'img-'+eNumType;

			if(name == eType){

				html = blockImageColumns(data);
				e.html(html);

				eNumType = -1;

			}

			eNumType++;

		}

		return true;


	}else if(data.type == 'img text' || data.type == 'text img') {
		
		while( eNumType ){
			
			eType = 'img text-'+eNumType;
			eType2 = 'text img-'+eNumType;

			if( name == eType || name == eType2 ){

				html = blockImageTextColumns(data);
				e.html(html);

				eNumType = ( eNumType - 1) - eNumType ;

			}

			eNumType++;

		}

		return true;

	}else if (data.type == 'text big img' || data.type == 'img text big') {
		while( eNumType ){
			
			eType = 'text big img-'+eNumType;
			eType2 = 'img text big-'+eNumType;

			if( name == eType || name == eType2 ){

				html = blockTextBigImageColumns(data);
				e.html(html);

				eNumType = ( eNumType - 1) - eNumType ;

			}

			eNumType++;

		}
		return true;

	}else{return false;};

}

function blockTextColumns (block){
	
	var style = style_text_block.main+style_text_block['columns-'+block.column], 
	 	str = "",
		column = block.column;

	while(column){

		str += blockText(style);
		column--

	}

	blocks = barControls()+str;

	return blocks
}
function blockImageColumns (block){
	
	var style = [style_image_block.main+style_image_block['columns-'+block.column],style_image_block.image_contain],
		//styleContain = style_image_block.image_contain, 
	 	str = "",
		column = block.column;

	while(column){

		str += blockImg(style);
		column--

	}

	blocks = barControls()+str;

	return blocks

}

function blockImageTextColumns (block){
	
	var style_text = style_text_block.main+style_text_block['columns-'+block.column],
		style_img  = [style_image_block.main+style_image_block['columns-'+block.column],style_image_block.image_contain],
		str = "",
		type = block.type.split(" "),
		block_1 = type[0].charAt(0).toUpperCase() + type[0].slice(1),
		block_2 = type[1].charAt(0).toUpperCase() + type[1].slice(1),
		order = block.order.toString().split(""),
		str_function = "",
		column = 0;

		if ( order[0] < 3 ) {
			
			column = order[0];
			
			if ( type[0] === 'text'){
				str_function = blockText(style_text);
			}else{
				str_function = blockImg(style_img);
			}

			while(column){
				str += str_function;
				column--

			}

			if( order[1] < 3 ){

				column = order[1];
				
				if ( type[1] === 'text'){
					str_function = blockText(style_text);
				}else{
					str_function = blockImg(style_img);
				}

				while(column){
					str += str_function;
					column--

				}

				if ( order[2] < 2 ) {

					column = order[2];
					
					if ( type[0] === 'text'){
						str_function = blockText(style_text);
					}else{
						str_function = blockImg(style_img);
					}

					while(column){
						str += str_function;
						column--

					}

				}


			}

		}

	blocks = barControls()+str;

	return blocks

}

function blockTextBigImageColumns(block){
	
	var	style_text = style_text_block.main+'width:61.67%;',
		style_img  = [style_image_block.main+style_image_block['columns-3'],style_image_block.image_contain],
		str = "",
		type = block.type.split(" ");

		if (type[0] === 'text') {
			str = blockText(style_text)
			str += blockImg(style_img)
		}else{
			str = blockImg(style_img)
			str += blockText(style_text)
		}

		blocks = barControls()+str;

		return blocks

}
function blockImg (style){

	blocks = "<div class='img columns-1' style='"+style[0]+"'>"+
				"<div class='edit-img' style='display:none'>"+
					"<span class='icon-edit'></span>"+
					"<span class='icon-browser'></span>"+
				"</div>"+
				"<div class='content' style='"+style[1]+"'>"+
					"<img src='https://s3.amazonaws.com/auctiferawebsite/imgNO.png' data-type='imgNO' style='width:100%''>"+
				"</div>"+
			 "</div>";

	return blocks;

}

function blockText (style){

	blocks = "<div class='text columns-1' style='"+style+"'>"+
				"<div class='edit-text' style='display:none'>"+
					"<span class='icon-edit'></span>"+
				"</div>"+
			 	"This area to offer a short preview of your emails content."+
			 "</div>";

	return blocks;

}

function barControls (){

	blocks = "<div class='bar-controls' style='display:none;'>"+
			 "<span class='control-move'></span>"+
			 "<a class='control-plus' href='#'></a>"+
			 "<a class='control-reload' href='#'></a>"+
			 "<a class='control-trash' href='#'></a>"+
			 "</div>"
	
	return blocks
}

function plusBlock(e){
	
	eTag = e.parents('.bar-controls').attr('style','display:none;').parents('li');
	eClass = eTag.attr('class');
	eHtml = eTag.html()
	html = '<li class="'+eClass+'" style="width:600px;height:auto;">'+eHtml+'</li>';
	eTag.before(html);

}

function addClassColumnsNewBlock(e){
	
	e.preventDefault;
	
	var data = e.data(),
		type = data.type,
		name = data.type+'-'+data.column,
		eType = "",
		eNumType = 1;

   	while( eNumType ){
   		
   		eType = type+'-'+eNumType;

		if (name == eType) {

			e.removeClass('img-2 draggable box').addClass('columns');
			e.css({'width':'600px','height':'auto'});
			// eClass = e.toElement.className.split(" ");
			// e.toElement.className = eClass[3]+' '+eClass[4]+' columns';
			// e.toElement.style.width = '600px';
			// e.toElement.style.height = 'auto';

			eNumType = ( eNumType - 1) - eNumType ;
		}

		eNumType++;
		
	}	
}
