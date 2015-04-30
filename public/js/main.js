/**
*       --------------------------------------------------------------------
*       Created by: Ana Cabrera   Date: 10 March 2015   Version: 1.0
*       Last edit by: Ana Cabrera Date: 7 April 2015
*       --------------------------------------------------------------------
*
*   List Action
*   -----------
*   - initDocument
*   - dragDrop
*   - showBar
*   - buttons
*   - saveDocument
*
*   Modification
*   ------------
*   - remove function -> textRichArea and imgaesRichtArea
*   - remove btn save
**/

$(function(e){
    initDocument();
    dragDrop();
    showBar();//Init hover bar event
    buttons(e);//contain all button action 
    textRichArea();
    imgaesRichtArea();
});
function initDocument(){
    
    //add edit html blocks to document 
    $('.w-edit .new-block').prepend(wEdit['new-block']);
    $('.edit-buttons').prepend(wEdit['buttons-text']);
     $('#img').prepend(wEdit['edit-img'])
   
    //get template
    numTemplate = $("#email-body").data('template');
    
    //add template if it is a template
    if (numTemplate != 'edit') {
        $("#email-body #sortable").prepend(template[numTemplate]);
    }

    //insert controls to current blocks 
    current_blocks = $('ul#sortable li.columns').length;
    while(current_blocks){  
        $('ul#sortable li.columns:nth-child('+current_blocks+')').prepend(barControls());
        current_blocks--;
    }

}
function dragDrop (){

    //move blocks
    $( "#sortable" ).sortable({
        revert: true,
        cursor: "move",
        start: function(){
            $('ul#sortable li.columns').removeClass('bar').css({border: '1px solid black'});
        },
        beforeStop:function (e, ui){
                element = ui.item;
                new_block = element.hasClass('box')
                
            if (new_block) {
                addBlock(element)
                addClassColumnsNewBlock(element);
            };
            $('#sortable li.columns').addClass('bar');
            //showBar();
        },
        stop: function (e, ui){
            $('ul#sortable li.columns').css({border:'none'});
        }

    });

    //Generate to new blocks
    $( ".draggable" ).draggable({
        connectToSortable: "#sortable",
        helper: "clone",
        revert: "invalid"
    });

    $( "ul, li" ).disableSelection();

}
function showBar(){
    
    $(document).on('mouseover', '.bar', function() {
           
        if ($(this).hasClass('columns') && $(this).hasClass('bar')){ 

            $('.bar-controls',this).css({ display:'block' });

            $(this).css({   
                            border: '1px solid rgb(69, 69, 69)',
                            'box-shadow': 'rgb(84, 84, 84) 0px 0px 5px',
                            margin: '0.5em 0px'
                        });
        }

    });

    $(document).on('mouseout', '.bar', function() {
             
        if ($(this).hasClass('columns') && $(this).hasClass('bar')){ 

            $('.bar-controls',this).css({ display:'none' });
            
            $(this).css({   
                            border:'none',
                            'box-shadow': 'none',
                            margin: '0px'
                        });
        }

    });

    $(document).on('mouseover', '.text, .img', function() {
        if ($(this).hasClass('text')) {
            $('.edit-text',this).css({ display:'block' });
        }else if ($(this).hasClass('img')) {
            $('.edit-img',this).css({ display:'block' });
        }
    });

    $(document).on('mouseout', '.text, .img', function(e) {
        if ($(this).hasClass('text')) {
            $('.edit-text',this).css({ display:'none' });
        }else if ($(this).hasClass('img')) {
            $('.edit-img',this).css({ display:'none' });
        }    
    });

}

function buttons(){

    //show or hiden bar new block 
    $('.menu-toggle').on('click', function(){
            $(this).toggleClass('menu-open');
            $('.edit').toggleClass('open');
    });

    //plus copy block
    $('body').on('click', '.control-plus' , function(){
        plusBlock($(this));
    });

    //remove block
    $('body').on('click', '.control-trash' , function(){
        $('#remove-block').show();
         blockRemove = $(this);
        $('#remove-block').on('click', '.accept', function(){
            blockRemove.parents('li').remove()
            $('#remove-block').hide();
        });

        $('#remove-block').on('click', '.cancel, .alert-title', function(){
            $('#remove-block').hide();
        });

    });

    //reload block
    $('body').on('click', '.control-reload' , function(){
        eType = $(this).parents('li').data('type');

        if (eType === 'img') {
            $(this).parent().siblings().html('<div class="edit-img" style="display:none"><span class="icon-edit"></span><span class="icon-browser"></span></div><div class="content" style="text-align:center;width:33%;margin:0 auto 0 auto;"><img src="https://s3.amazonaws.com/auctiferawebsite/imgNO.png" style="width:100%"></div></div>');
        }else if (eType === 'text') {
            $(this).parent().siblings().html("<div class='edit-text' style='display:none'> <span class='icon-edit'></span> </div> This area to offer a short preview of your emails content.");
        }else if (eType === 'text img' || eType === 'text big img') {
            $(this).parent().siblings('.img').html('<div class="edit-img" style="display:none"><span class="icon-edit"></span><span class="icon-browser"></span></div><div class="content" style="text-align:center;width:33%;margin:0 auto 0 auto;"><img src="https://s3.amazonaws.com/auctiferawebsite/imgNO.png" style="width:100%"></div></div>');
            $(this).parent().siblings('.text').html("<div class='edit-text' style='display:none'> <span class='icon-edit'></span> </div> This area to offer a short preview of your emails content.");
        }else if (eType === 'img text' || eType === 'img text big') {
            $(this).parent().siblings('.img').html('<div class="edit-img" style="display:none"><span class="icon-edit"></span><span class="icon-browser"></span></div><div class="content" style="text-align:center;width:33%;margin:0 auto 0 auto;"><img src="https://s3.amazonaws.com/auctiferawebsite/imgNO.png" style="width:100%"></div></div>')
            $(this).parent().siblings('.text').html("<div class='edit-text' style='display:none'> <span class='icon-edit'></span> </div> This area to offer a short preview of your emails content.");
        }
    });

    //show text edit click
    $('body').on('click','.text .edit-text', function(){
                
        thisElement = $(this).parents('.text');
        thisElement.children('.edit-text').remove();
        text = thisElement.html();
        $('.edit-text .content').html(text);
        $('#text').show();

        if ($('#img').css('display') == 'block') {
             $('#img').hide();
        }else if ($('.menu-open')) {
            $('.menu-open').removeClass('menu-open');
            $('.open').removeClass('open');
        }

        $('body').on('click','.btn-update', function(){

            html = $('.edit-text .content').html();
            html = wEdit['edit-text']+html;
            thisElement.html(html);
            $('#text').hide();

        });

        $('body').on('click','#edit-close', function(){
            
            thisElement.html(wEdit['edit-text']+text);
            $('#text').hide();

        });

    });

    //show text edit dbclick
    $('body').on('dblclick','.text', function(){
                
        thisElement = $(this);
        thisElement.children('.edit-text').remove();
        text = thisElement.html();
        $('.edit-text .content').html(text);
        $('#text').show();

        if ($('#img').css('display') == 'block') {
             $('#img').hide();
        }else if ($('.menu-open')) {
            $('.menu-open').removeClass('menu-open');
            $('.open').removeClass('open');
        }

        $('body').on('click','.btn-update', function(){

            html = $('.edit-text .content').html();
            html = wEdit['edit-text']+html;
            thisElement.html(html);
            $('#text').hide();

        });

        $('body').on('click','#edit-close', function(){
            
            thisElement.html(wEdit['edit-text']+text);
            $('#text').hide();

        });

    });

    $('body').on('click','#button',function(){
            saveDocument();
        });

    //upload image
    $('body').on('click','#upload-btn', function(){
        sendForm()
        var fileName = document.getElementById("browser-file-name").value;
            
        if (fileName) {
            $('.browser-load').css('display','inline-block');
            $("#fileform").submit(); 
        }else{
            alert('por favor seleccione un archivo');
        }           
        //

    });

    //add img to component 
    $('body').on('click','.icon-browser', function(){
        
        $('#browser-img').show();
        thisElement = $(this);
        el = "";
        elSelect = false;
        var lastTarget;
        
        $('body').on('click','.brower-img img', function(e){
            
            var target = e.target; 
            $('#'+lastTarget).parent().css('border','none');
            
            target.parentElement.style.border = '1px solid black';
            target.parentElement.style.display = 'block';
            lastTarget = target.id;
            el = $(this);
            elSelect = true;

        });

        $('body').on('click','#add-img', function(){

            if (elSelect) {

                elURL = el.attr('src');

                thisElement.parents('.img').children('.content').children('img').attr('src',elURL);
                thisElement.parents('.img').children('.content').children('img').attr('data-type','');

                $('#'+lastTarget).parent().css('border','none');

                $('#browser-img').hide(); 

            }else{

                alert('selected img before add');
            }

        });

        $('body').on('click','#browser-close', function(){
            $('#browser-img').hide();
        });

    });

    //get update images name on input text
    $('body').on('change', '#browser-file', function(){
        document.getElementById("browser-file-name").value = $(this).val(); 
    });
}

function saveDocument(){
    var a,b,cont
    
    $('#sortable li .bar-controls, .text .edit-text, .img .edit-img').remove();
    var lengthImg = $('.img img').length

    //delete img if no type is 'imgNo'
    while(lengthImg){
        var i = lengthImg - 1;
        var imgType = $('.img img')[i].dataset;
        if (imgType.type == 'imgNO') {
            $('.img img')[i].remove();
        }
        lengthImg--
    }//data('type','imgNO').remove();
    for (var i = $('#sortable li').length - 1; i >= 0; i--) {
        cont = i +1;
        a = $('#sortable li:nth-child('+cont+')').html();
        var c = $('#sortable li').length;
        $('#sortable li:nth-child('+cont+')').replaceWith('<tr><td style="padding:1em 0;">'+a+'</td></tr>');
    };

    $('#footer').parent().css({'border-top':'1px solid rgb(126, 126, 126)'});
    var b = $('#sortable').html();

        $('#sortable').replaceWith('<center><table width="600" style="background:white;">'+b+'</table></center>');

        html = $('.ready').html();

        return html;

}
        