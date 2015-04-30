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

blocks = "";
data_blocks = {};

style_text_block = {
	main	 	: "font-size:14px;padding:0 2.5%;display:inline-block;padding:0 2.5%;vertical-align: top;",
	"columns-1"	: "width:95%;",
	"columns-2"	: "width:45%;",
	"columns-3"	: "width:28.33%;"
};

style_image_block = {
	main	 		: "display:inline-block;vertical-align:sub;",
	image_contain 	: "text-align:center;width:33%;margin:0 auto 0 auto;padding:2.5%;",
	"columns-1"		: "width:100%;",
	"columns-2"		: "width:50%;",
	"columns-3"		: "width:33.33%;"
};

current_blocks= "";

template = ["<li class='columns bar' data-type='img' data-column='1'>"+
				"<div class='img columns-1' style='"+style_image_block['main']+style_image_block['columns-1']+"'>"+
					"<div class='edit-img' style='display:none'>"+
						"<span class='icon-edit'></span>"+
						"<span class='icon-browser'></span>"+
					"</div>"+
					"<div class='content'style='"+style_image_block['image_contain']+"'>"+
						"<img src='https://s3.amazonaws.com/auctiferawebsite/imgNO.png' data-type='imgNO' style='width:100%'>"+
					"</div>"+
				"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='text' data-column='1' style='border-top:1px solid rgb(126, 126, 126) !important;'>"+
					"<div id='footer' class='text columns-1' style='"+style_text_block['main']+style_text_block['columns-1']+"color:rgb(126, 126, 126);'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Copyright © 2015 company, All rights reserved."+
					"</div>"+
			"</li>",
			"<li class='columns bar' data-type='text' data-column='1'>"+
				"<div class='text columns-1' style='"+style_text_block['main']+style_text_block['columns-1']+"'>"+
					"<div class='edit-text' style='display:none'>"+
						"<span class='icon-edit'></span>"+
					"</div>"+
					"<div style='font-size:32px;text-align:center;'>"+
						"this area to offer a short preview of your email's content."+
					"</div>"+
				"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='img' data-column='1'>"+
					"<div class='img columns-1' style='"+style_image_block['main']+style_image_block['columns-1']+"'>"+
						"<div class='edit-img' style='display:none'>"+
							"<span class='icon-edit'></span>"+
							"<span class='icon-browser'></span>"+
						"</div>"+
						"<div class='content'style='"+style_image_block['image_contain']+"'>"+
							"<img src='https://s3.amazonaws.com/auctiferawebsite/imgNO.png' data-type='imgNO' style='width:100%'>"+
						"</div>"+
					"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='text' data-column='1'>"+
					"<div class='text columns-1' style='"+style_text_block['main']+style_text_block['columns-1']+"'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Aliquam id consectetur nisl. Nam id leo nec felis pellentesque fringilla sed et arcu. Sed ornare, elit nec fermentum sollicitudin, magna risus porttitor ante, non scelerisque augue arcu eleifend leo. Praesent non porttitor ante. Nulla aliquet lacus augue, ut pharetra diam fringilla pulvinar. Morbi a commodo leo. Maecenas malesuada rutrum massa, non vehicula sapien interdum dignissim. Nulla mollis metus felis, at pharetra nisl pellentesque et. Maecenas volutpat pulvinar velit, quis aliquam quam ultrices eget. Nulla pharetra orci mattis enim laoreet, at sollicitudin velit posuere."+
					"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='text' data-column='1' style='border-top:1px solid rgb(126, 126, 126) !important;'>"+
					"<div id='footer' class='text columns-1' style='"+style_text_block['main']+style_text_block['columns-1']+"color:rgb(126, 126, 126);'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Copyright © 2015 company, All rights reserved."+
					"</div>"+
			"</li>",
			"<li class='columns bar' data-type='text' data-column='1'>"+
				"<div class='text columns-1' style='"+style_text_block['main']+style_text_block['columns-1']+"'>"+
					"<div class='edit-text' style='display:none'>"+
						"<span class='icon-edit'></span>"+
					"</div>"+
					"<div style='font-size:32px;text-align:center;'>"+
						"this area to offer a short preview of your email's content."+
					"</div>"+
				"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='text' data-column='1'>"+
					"<div class='text columns-1' style='"+style_text_block['main']+style_text_block['columns-1']+"'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Aliquam id consectetur nisl. Nam id leo nec felis pellentesque fringilla sed et arcu. Sed ornare, elit nec fermentum sollicitudin, magna risus porttitor ante, non scelerisque augue arcu eleifend leo. Praesent non porttitor ante. Nulla aliquet lacus augue, ut pharetra diam fringilla pulvinar. Morbi a commodo leo. Maecenas malesuada rutrum massa, non vehicula sapien interdum dignissim. Nulla mollis metus felis, at pharetra nisl pellentesque et. Maecenas volutpat pulvinar velit, quis aliquam quam ultrices eget. Nulla pharetra orci mattis enim laoreet, at sollicitudin velit posuere."+
					"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='img' data-column='2' data-order='0'>"+
					"<div class='img columns-2' style='"+style_image_block['main']+style_image_block['columns-2']+"'>"+
						"<div class='edit-img' style='display:none'>"+
							"<span class='icon-edit'></span>"+
							"<span class='icon-browser'></span>"+
						"</div>"+
						"<div class='content'style='"+style_image_block['image_contain']+"'>"+
							"<img src='https://s3.amazonaws.com/auctiferawebsite/imgNO.png' data-type='imgNO' style='width:100%'>"+
						"</div>"+
					"</div>"+
					"<div class='img columns-2' style='"+style_image_block['main']+style_image_block['columns-2']+"'>"+
						"<div class='edit-img' style='display:none'>"+
							"<span class='icon-edit'></span>"+
							"<span class='icon-browser'></span>"+
						"</div>"+
						"<div class='content'style='"+style_image_block['image_contain']+"'>"+
							"<img src='https://s3.amazonaws.com/auctiferawebsite/imgNO.png' data-type='imgNO' style='width:100%'>"+
						"</div>"+
					"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='text' data-column='2' data-order='0'>"+
					"<div class='text columns-2' style='"+style_text_block['main']+style_text_block['columns-2']+"'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Aliquam id consectetur nisl. Nam id leo nec felis pellentesque fringilla sed et arcu. Sed ornare, elit nec fermentum sollicitudin, magna risus porttitor ante, non scelerisque augue arcu eleifend leo. Praesent non porttitor ante. Nulla aliquet lacus augue, ut pharetra diam fringilla pulvinar. Morbi a commodo leo. Maecenas malesuada rutrum massa, non vehicula sapien interdum dignissim. Nulla mollis metus felis, at pharetra nisl pellentesque et. Maecenas volutpat pulvinar velit, quis aliquam quam ultrices eget. Nulla pharetra orci mattis enim laoreet, at sollicitudin velit posuere."+
					"</div>"+
					"<div class='text columns-2' style='"+style_text_block['main']+style_text_block['columns-2']+"'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Aliquam id consectetur nisl. Nam id leo nec felis pellentesque fringilla sed et arcu. Sed ornare, elit nec fermentum sollicitudin, magna risus porttitor ante, non scelerisque augue arcu eleifend leo. Praesent non porttitor ante. Nulla aliquet lacus augue, ut pharetra diam fringilla pulvinar. Morbi a commodo leo. Maecenas malesuada rutrum massa, non vehicula sapien interdum dignissim. Nulla mollis metus felis, at pharetra nisl pellentesque et. Maecenas volutpat pulvinar velit, quis aliquam quam ultrices eget. Nulla pharetra orci mattis enim laoreet, at sollicitudin velit posuere."+
					"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='text' data-column='1' style='border-top:1px solid rgb(126, 126, 126) !important;'>"+
					"<div id='footer' class='text columns-1' style='"+style_text_block['main']+style_text_block['columns-1']+"color:rgb(126, 126, 126);'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Copyright © 2015 company, All rights reserved."+
					"</div>"+
			"</li>",
			"<li class='columns bar' data-type='text' data-column='1'>"+
				"<div class='text columns-1' style='"+style_text_block['main']+style_text_block['columns-1']+"'>"+
					"<div class='edit-text' style='display:none'>"+
						"<span class='icon-edit'></span>"+
					"</div>"+
					"<div style='font-size:32px;text-align:center;'>"+
						"this area to offer a short preview of your email's content."+
					"</div>"+
				"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='img' data-column='2' data-order='0'>"+
					"<div class='img columns-2' style='"+style_image_block['main']+style_image_block['columns-2']+"'>"+
						"<div class='edit-img' style='display:none'>"+
							"<span class='icon-edit'></span>"+
							"<span class='icon-browser'></span>"+
						"</div>"+
						"<div class='content'style='"+style_image_block['image_contain']+"'>"+
							"<img src='https://s3.amazonaws.com/auctiferawebsite/imgNO.png' data-type='imgNO' style='width:100%'>"+
						"</div>"+
					"</div>"+
					"<div class='img columns-2' style='"+style_image_block['main']+style_image_block['columns-2']+"'>"+
						"<div class='edit-img' style='display:none'>"+
							"<span class='icon-edit'></span>"+
							"<span class='icon-browser'></span>"+
						"</div>"+
						"<div class='content'style='"+style_image_block['image_contain']+"'>"+
							"<img src='https://s3.amazonaws.com/auctiferawebsite/imgNO.png' data-type='imgNO' style='width:100%'>"+
						"</div>"+
					"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='text' data-column='2' data-order='0'>"+
					"<div class='text columns-2' style='"+style_text_block['main']+style_text_block['columns-2']+"'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Aliquam id consectetur nisl. Nam id leo nec felis pellentesque fringilla sed et arcu. Sed ornare, elit nec fermentum sollicitudin, magna risus porttitor ante, non scelerisque augue arcu eleifend leo. Praesent non porttitor ante. Nulla aliquet lacus augue, ut pharetra diam fringilla pulvinar. Morbi a commodo leo. Maecenas malesuada rutrum massa, non vehicula sapien interdum dignissim. Nulla mollis metus felis, at pharetra nisl pellentesque et. Maecenas volutpat pulvinar velit, quis aliquam quam ultrices eget. Nulla pharetra orci mattis enim laoreet, at sollicitudin velit posuere."+
					"</div>"+
					"<div class='text columns-2' style='"+style_text_block['main']+style_text_block['columns-2']+"'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Aliquam id consectetur nisl. Nam id leo nec felis pellentesque fringilla sed et arcu. Sed ornare, elit nec fermentum sollicitudin, magna risus porttitor ante, non scelerisque augue arcu eleifend leo. Praesent non porttitor ante. Nulla aliquet lacus augue, ut pharetra diam fringilla pulvinar. Morbi a commodo leo. Maecenas malesuada rutrum massa, non vehicula sapien interdum dignissim. Nulla mollis metus felis, at pharetra nisl pellentesque et. Maecenas volutpat pulvinar velit, quis aliquam quam ultrices eget. Nulla pharetra orci mattis enim laoreet, at sollicitudin velit posuere."+
					"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='text' data-column='1' style='border-top:1px solid rgb(126, 126, 126) !important;'>"+
					"<div id='footer' class='text columns-1' style='"+style_text_block['main']+style_text_block['columns-1']+"color:rgb(126, 126, 126);'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Copyright © 2015 company, All rights reserved."+
					"</div>"+
			"</li>",
			"<li class='columns bar' data-type='text' data-column='1'>"+
				"<div class='text columns-1' style='"+style_text_block['main']+style_text_block['columns-1']+"'>"+
					"<div class='edit-text' style='display:none'>"+
						"<span class='icon-edit'></span>"+
					"</div>"+
					"<div style='font-size:32px;text-align:center;'>"+
						"this area to offer a short preview of your email's content."+
					"</div>"+
				"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='img' data-column='2' data-order='0'>"+
					"<div class='img columns-3' style='"+style_image_block['main']+style_image_block['columns-3']+"'>"+
						"<div class='edit-img' style='display:none'>"+
							"<span class='icon-edit'></span>"+
							"<span class='icon-browser'></span>"+
						"</div>"+
						"<div class='content'style='"+style_image_block['image_contain']+"'>"+
							"<img src='https://s3.amazonaws.com/auctiferawebsite/imgNO.png' data-type='imgNO' style='width:100%'>"+
						"</div>"+
					"</div>"+
					"<div class='img columns-3' style='"+style_image_block['main']+style_image_block['columns-3']+"'>"+
						"<div class='edit-img' style='display:none'>"+
							"<span class='icon-edit'></span>"+
							"<span class='icon-browser'></span>"+
						"</div>"+
						"<div class='content'style='"+style_image_block['image_contain']+"'>"+
							"<img src='https://s3.amazonaws.com/auctiferawebsite/imgNO.png' data-type='imgNO' style='width:100%'>"+
						"</div>"+
					"</div>"+
					"<div class='img columns-3' style='"+style_image_block['main']+style_image_block['columns-3']+"'>"+
						"<div class='edit-img' style='display:none'>"+
							"<span class='icon-edit'></span>"+
							"<span class='icon-browser'></span>"+
						"</div>"+
						"<div class='content'style='"+style_image_block['image_contain']+"'>"+
							"<img src='https://s3.amazonaws.com/auctiferawebsite/imgNO.png' data-type='imgNO' style='width:100%'>"+
						"</div>"+
					"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='text' data-column='2' data-order='0'>"+
				"<div class='text columns-3' style='"+style_text_block['main']+style_text_block['columns-3']+"'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Aliquam id consectetur nisl. Nam id leo nec felis pellentesque fringilla sed et arcu. Sed ornare, elit nec fermentum sollicitudin, magna risus porttitor ante, non scelerisque augue arcu eleifend leo. Praesent non porttitor ante. Nulla aliquet lacus augue, ut pharetra diam fringilla pulvinar. Morbi a commodo leo. Maecenas malesuada rutrum massa, non vehicula sapien interdum dignissim. Nulla mollis metus felis, at pharetra nisl pellentesque et. Maecenas volutpat pulvinar velit, quis aliquam quam ultrices eget. Nulla pharetra orci mattis enim laoreet, at sollicitudin velit posuere."+
					"</div>"+
				"<div class='text columns-3' style='"+style_text_block['main']+style_text_block['columns-3']+"'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Aliquam id consectetur nisl. Nam id leo nec felis pellentesque fringilla sed et arcu. Sed ornare, elit nec fermentum sollicitudin, magna risus porttitor ante, non scelerisque augue arcu eleifend leo. Praesent non porttitor ante. Nulla aliquet lacus augue, ut pharetra diam fringilla pulvinar. Morbi a commodo leo. Maecenas malesuada rutrum massa, non vehicula sapien interdum dignissim. Nulla mollis metus felis, at pharetra nisl pellentesque et. Maecenas volutpat pulvinar velit, quis aliquam quam ultrices eget. Nulla pharetra orci mattis enim laoreet, at sollicitudin velit posuere."+
					"</div>"+
				"<div class='text columns-3' style='"+style_text_block['main']+style_text_block['columns-3']+"'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Aliquam id consectetur nisl. Nam id leo nec felis pellentesque fringilla sed et arcu. Sed ornare, elit nec fermentum sollicitudin, magna risus porttitor ante, non scelerisque augue arcu eleifend leo. Praesent non porttitor ante. Nulla aliquet lacus augue, ut pharetra diam fringilla pulvinar. Morbi a commodo leo. Maecenas malesuada rutrum massa, non vehicula sapien interdum dignissim. Nulla mollis metus felis, at pharetra nisl pellentesque et. Maecenas volutpat pulvinar velit, quis aliquam quam ultrices eget. Nulla pharetra orci mattis enim laoreet, at sollicitudin velit posuere."+
					"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='text' data-column='1' style='border-top:1px solid rgb(126, 126, 126) !important;'>"+
					"<div id='footer' class='text columns-1' style='"+style_text_block['main']+style_text_block['columns-1']+"color:rgb(126, 126, 126);'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Copyright © 2015 company, All rights reserved."+
					"</div>"+
			"</li>",
			"<li class='columns bar' data-type='text' data-column='1'>"+
				"<div class='text columns-1' style='"+style_text_block['main']+style_text_block['columns-1']+"'>"+
					"<div class='edit-text' style='display:none'>"+
						"<span class='icon-edit'></span>"+
					"</div>"+
					"<div style='font-size:32px;text-align:center;'>"+
						"this area to offer a short preview of your email's content."+
					"</div>"+
				"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='img' data-column='2' data-order='0'>"+
					"<div class='img columns-2' style='"+style_image_block['main']+style_image_block['columns-2']+"'>"+
						"<div class='edit-img' style='display:none'>"+
							"<span class='icon-edit'></span>"+
							"<span class='icon-browser'></span>"+
						"</div>"+
						"<div class='content'style='"+style_image_block['image_contain']+"'>"+
							"<img src='https://s3.amazonaws.com/auctiferawebsite/imgNO.png' data-type='imgNO' style='width:100%'>"+
						"</div>"+
					"</div>"+
					"<div class='img columns-2' style='"+style_image_block['main']+style_image_block['columns-2']+"'>"+
						"<div class='edit-img' style='display:none'>"+
							"<span class='icon-edit'></span>"+
							"<span class='icon-browser'></span>"+
						"</div>"+
						"<div class='content'style='"+style_image_block['image_contain']+"'>"+
							"<img src='https://s3.amazonaws.com/auctiferawebsite/imgNO.png' data-type='imgNO' style='width:100%'>"+
						"</div>"+
					"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='text' data-column='2' data-order='0'>"+
				"<div class='text columns-2' style='"+style_text_block['main']+style_text_block['columns-2']+"'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Aliquam id consectetur nisl. Nam id leo nec felis pellentesque fringilla sed et arcu. Sed ornare, elit nec fermentum sollicitudin, magna risus porttitor ante, non scelerisque augue arcu eleifend leo. Praesent non porttitor ante. Nulla aliquet lacus augue, ut pharetra diam fringilla pulvinar. Morbi a commodo leo. Maecenas malesuada rutrum massa, non vehicula sapien interdum dignissim. Nulla mollis metus felis, at pharetra nisl pellentesque et. Maecenas volutpat pulvinar velit, quis aliquam quam ultrices eget. Nulla pharetra orci mattis enim laoreet, at sollicitudin velit posuere."+
					"</div>"+
				"<div class='text columns-2' style='"+style_text_block['main']+style_text_block['columns-2']+"'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Aliquam id consectetur nisl. Nam id leo nec felis pellentesque fringilla sed et arcu. Sed ornare, elit nec fermentum sollicitudin, magna risus porttitor ante, non scelerisque augue arcu eleifend leo. Praesent non porttitor ante. Nulla aliquet lacus augue, ut pharetra diam fringilla pulvinar. Morbi a commodo leo. Maecenas malesuada rutrum massa, non vehicula sapien interdum dignissim. Nulla mollis metus felis, at pharetra nisl pellentesque et. Maecenas volutpat pulvinar velit, quis aliquam quam ultrices eget. Nulla pharetra orci mattis enim laoreet, at sollicitudin velit posuere."+
					"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='text' data-column='1'>"+
					"<div class='text columns-1' style='"+style_text_block['main']+style_text_block['columns-1']+"'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Aliquam id consectetur nisl. Nam id leo nec felis pellentesque fringilla sed et arcu. Sed ornare, elit nec fermentum sollicitudin, magna risus porttitor ante, non scelerisque augue arcu eleifend leo. Praesent non porttitor ante. Nulla aliquet lacus augue, ut pharetra diam fringilla pulvinar. Morbi a commodo leo. Maecenas malesuada rutrum massa, non vehicula sapien interdum dignissim. Nulla mollis metus felis, at pharetra nisl pellentesque et. Maecenas volutpat pulvinar velit, quis aliquam quam ultrices eget. Nulla pharetra orci mattis enim laoreet, at sollicitudin velit posuere."+
					"</div>"+
				"</li>"+
				"<li class='columns bar' data-type='text' data-column='1' style='border-top:1px solid rgb(126, 126, 126) !important;'>"+
					"<div id='footer' class='text columns-1' style='"+style_text_block['main']+style_text_block['columns-1']+"color:rgb(126, 126, 126);'>"+
						"<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						"</div>"+
						"Copyright © 2015 company, All rights reserved."+
					"</div>"+
			"</li>"];
wEdit = { 'new-block' : '<a href="#" class="menu-toggle">'+
							'<b class="line-1"></b>'+
							'<b class="line-2"></b>'+
							'</a>'+
							'<ul class="edit">'+
							'<li class="text-1 draggable box" data-type="text" data-column="1" data-order="0"></li>'+
							'<li class="text-2 draggable box" data-type="text" data-column="2" data-order="0"></li>'+
							'<li class="text-3 draggable box" data-type="text" data-column="3" data-order="0"></li>'+
							'<li class="img-1 draggable box" data-type="img" data-column="1" data-order="0"></li>'+
							'<li class="img-2 draggable box" data-type="img" data-column="2" data-order="0"></li>'+
							'<li class="img-3 draggable box" data-type="img" data-column="3" data-order="0"></li>'+
							'<li class="text-1-img-1 draggable box" data-type="text img" data-column="2" data-order="11"></li>'+
							'<li class="text-2-img-1 draggable box" data-type="text img" data-column="3" data-order="21"></li>'+
							'<li class="text-1-img-1-text-1 draggable box" data-type="text img" data-column="3" data-order="111"></li>'+
							'<li class="text-1-img-2 draggable box" data-type="text img" data-column="3" data-order="12"></li>'+
							'<li class="img-1-text-1 draggable box" data-type="img text" data-column="2" data-order="11"></li>'+
							'<li class="img-2-text-1 draggable box" data-type="img text" data-column="3" data-order="21"></li>'+
							'<li class="img-1-text-1-img-1 draggable box" data-type="img text" data-column="3" data-order="111"></li>'+
							'<li class="img-1-text-2 draggable box" data-type="img text" data-column="3" data-order="12"></li>'+
							'<li class="img-1-text-1-big draggable box" data-type="img text big" data-column="2" data-order="11"></li>'+
							'<li class="text-big-1-img-1 draggable box" data-type="text big img" data-column="2" data-order="11"></li>'+
						'</ul>',
			'edit-text' : "<div class='edit-text' style='display:none'>"+
							"<span class='icon-edit'></span>"+
						  "</div>",
			'buttons-text': "<div class='section'>"+
							"<button class='font-family'>Arial</button>"+
							"<ul id='font-family-options' class='font-options' style='display:none;'>"+
								"<li><button class='font-name'>Arial</button></li>"+
								"<li><button class='font-name'>Times</button></li>"+
								"<li><button class='font-name'>Tw Cen MT</button></li>"+
								"<li><button class='font-name'>Impact</button></li>"+
								"<li><button class='font-name'>Verdana</button></li>"+
							"</ul>"+
						"</div>"+
						"<div class='section' title='Select font size'>"+
							"<button class='font-size'>8</button>"+
							"<ul id='font-size-options' class='font-options' style='display:none;'>"+
								"<li><button class='font-number' data-number='1'>8</button></li>"+
								"<li><button class='font-number' data-number='2'>10</button></li>"+
								"<li><button class='font-number' data-number='3'>12</button></li>"+
								"<li><button class='font-number' data-number='4'>16</button></li>"+
								"<li><button class='font-number' data-number='5'>24</button></li>"+
								"<li><button class='font-number' data-number='6'>36</button></li>"+
								"<li><button class='font-number' data-number='7'>54</button></li>"+
							"</ul>"+
						"</div>"+
						"<div class='section'>"+
							"<button class='link' title='add link'></button>"+
							"<button class='unlink' title='remove link'></button>"+
						"</div>"+
						"<div class='section'>"+
							"<button class='bold' title='font bold'></button>"+
							"<button class='italic' title='font italic'></button>"+
							"<button class='underline' title='underline'></button>"+
							"<button class='font-color' title='Select font color'></button>"+
							"<div class='colors' style='display:none'>"+
								"<button data-color='#ffffff' class='color color-1'></button>"+
					            "<button data-color='#000000' class='color color-2'></button>"+
					            "<button data-color='#eeece1' class='color color-3'></button>"+
					            "<button data-color='#1f497d' class='color color-4'></button>"+
					            "<button data-color='#4f81bd' class='color color-5'></button>"+
					            "<button data-color='#c0504d' class='color color-6'></button>"+
					            "<button data-color='#9bbb59' class='color color-7'></button>"+
					            "<button data-color='#8064a2' class='color color-8'></button>"+
					            "<button data-color='#4bacc6' class='color color-9'></button>"+
								"<button data-color='#f79646' class='color color-10'></button>"+
								"<button data-color='#f2f2f2' class='color color-11'></button>"+
								"<button data-color='#7f7f7f' class='color color-12'></button>"+
								"<button data-color='#ddd9c3' class='color color-13'></button>"+
								"<button data-color='#c6d9f0' class='color color-14'></button>"+
								"<button data-color='#dbe5f1' class='color color-15'></button>"+
								"<button data-color='#f2dcdb' class='color color-16'></button>"+
								"<button data-color='#ebf1dd' class='color color-17'></button>"+
								"<button data-color='#e5e0ec' class='color color-18'></button>"+
								"<button data-color='#dbeef3' class='color color-19'></button>"+
								"<button data-color='#fdeada' class='color color-20'></button>"+
								"<button data-color='#d8d8d8' class='color color-21'></button>"+
								"<button data-color='#595959' class='color color-22'></button>"+
								"<button data-color='#c4bd97' class='color color-23'></button>"+
								"<button data-color='#8db3e2' class='color color-24'></button>"+
								"<button data-color='#b8cce4' class='color color-25'></button>"+
								"<button data-color='#e5b9b7' class='color color-26'></button>"+
								"<button data-color='#d7e3bc' class='color color-27'></button>"+
								"<button data-color='#ccc1d9' class='color color-28'></button>"+
								"<button data-color='#b7dde8' class='color color-29'></button>"+
								"<button data-color='#fbd5b5' class='color color-30'></button>"+
								"<button data-color='#bfbfbf' class='color color-31'></button>"+
								"<button data-color='#3f3f3f' class='color color-32'></button>"+
								"<button data-color='#938953' class='color color-33'></button>"+
								"<button data-color='#548dd4' class='color color-34'></button>"+
								"<button data-color='#95b3d7' class='color color-35'></button>"+
								"<button data-color='#d99694' class='color color-36'></button>"+
								"<button data-color='#c3d69b' class='color color-37'></button>"+
								"<button data-color='#b2a2c7' class='color color-38'></button>"+
								"<button data-color='#92cddc' class='color color-39'></button>"+
								"<button data-color='#fac08f' class='color color-40'></button>"+
								"<button data-color='#a5a5a5' class='color color-41'></button>"+
								"<button data-color='#262626' class='color color-42'></button>"+
								"<button data-color='#494429' class='color color-43'></button>"+
								"<button data-color='#17365d' class='color color-44'></button>"+
								"<button data-color='#366092' class='color color-45'></button>"+
								"<button data-color='#953734' class='color color-46'></button>"+
								"<button data-color='#76923c' class='color color-47'></button>"+
								"<button data-color='#5f497a' class='color color-48'></button>"+
								"<button data-color='#31859b' class='color color-49'></button>"+
								"<button data-color='#e36c09' class='color color-50'></button>"+
								"<button data-color='#7f7f7f' class='color color-51'></button>"+
								"<button data-color='#0c0c0c' class='color color-52'></button>"+
								"<button data-color='#1d1b10' class='color color-53'></button>"+
								"<button data-color='#0f243e' class='color color-54'></button>"+
								"<button data-color='#244061' class='color color-55'></button>"+
								"<button data-color='#632423' class='color color-56'></button>"+
								"<button data-color='#4f6128' class='color color-57'></button>"+
								"<button data-color='#3f3151' class='color color-58'></button>"+
								"<button data-color='#205867' class='color color-59'></button>"+
								"<button data-color='#974806' class='color color-60'></button>"+
								"<button data-color='#c00000' class='color color-61'></button>"+
								"<button data-color='#ff0000' class='color color-62'></button>"+
								"<button data-color='#ffc000' class='color color-63'></button>"+
								"<button data-color='#ffff00' class='color color-64'></button>"+
								"<button data-color='#92d050' class='color color-65'></button>"+
								"<button data-color='#00b050' class='color color-66'></button>"+
								"<button data-color='#00b0f0' class='color color-67'></button>"+
								"<button data-color='#0070c0' class='color color-68'></button>"+
								"<button data-color='#002060' class='color color-69'></button>"+
								"<button data-color='#7030a0' class='color color-70'></button>"+
							"</div>"+
							"<button class='text-left' title='text align left'></button>"+
							"<button class='text-center' title='text align center'></button>"+
							"<button class='text-right' title='text align right'></button>"+
							"<button class='horizontal-line' title='insert horizontal line'></button>"+
						"</div>",
			"edit-img" :"<div class='edit-title'>"+
	      					"<span id='edit-img-close' class='close'></span>img"+
	      				"</div>"+
						"<div class='content'>"+
							"<div class='edit-box edit-tags'>"+
								"<span class='edit-title'>Images Size</span>"+
								"<div class='section'>"+
									"<button class='img-xsmall'></button>"+
									"<span>super small</span>"+
								"</div>"+
								"<div class='section'>"+
									"<button class='img-small'></button>"+
									"<span>small</span>"+
								"</div>"+
								"<div class='section'>"+
									"<button class='img-medium'></button>"+
									"<span>medium</span>"+
								"</div>"+
								"<div class='section'>"+
									"<button class='img-big'></button>"+
									"<span>big</span>"+
								"</div>"+
							"</div>"+
							"<div class='edit-box edit-tags'>"+
								"<span class='edit-title'>Images Position</span>"+
								"<div class='section'>"+
									"<button class='img-left'></button>"+
									"<span>left</span>"+
								"</div>"+
								"<div class='section'>"+
									"<button class='img-center'></button>"+
									"<span>center</span>"+
								"</div>"+
								"<div class='section'>"+
									"<button class='img-right'></button>"+
									"<span>right</span>"+
								"</div>"+
								"<div class='section'>"+
									"<button class='img-top'></button>"+
									"<span>top</span>"+
								"</div>"+
								"<div class='section'>"+
									"<button class='img-sub'></button>"+
									"<span>bottom</span>"+
								"</div>"+
							"</div>"+
						"</div>"
};


