/**
*       --------------------------------------------------------------------
*       Created by: Ana Cabrera   Date: 7 April 2015   Version: 1.0
*       Last edit by: --          Date: --
*       --------------------------------------------------------------------
*
*   List Action
*   -----------
*   - textRichArea
*   - imgaesRichtArea
*
*	Modification
*	------------
*	- add btn -> horizontal ruler
**/
function textRichArea(){
    body = $('body');

    //show list font family
    body.on('click','.font-family',function(){
        $('#font-family-options').toggle();
    });
    //change font family to selected text and hide list font family
    body.on('click','.font-name', function(){
        fontName = $(this).text();
        $('.font-family').text(fontName);
        //fontName = fontName.replace(" ","-");
        document.execCommand('fontName', false, fontName);
        $('#font-family-options').hide();
    });
    //show list font size
    body.on('click','.font-size',function(){
        $('#font-size-options').toggle();
    });
    //change font size to selection text and hide list font size
    body.on('click','.font-number', function(){
        var fontElements, fontSelectPx,
            fontPx = ['8px','10px','12px'];
        
        fontNumber = $(this).data('number');
        fontNumberText = $(this).text();
        
        $('.font-size').text(fontNumberText);
        
        document.execCommand('fontSize', false, fontNumber);
        
        fontElements = document.getElementsByTagName("font");
        
        for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == fontNumber && fontNumber < 4) {
            fontElements[i].removeAttribute("size");
            
            if (fontNumber == '1') 
                fontSelectPx = 0;
            if (fontNumber == '2') 
                fontSelectPx = 1;
            if (fontNumber == '3') 
                fontSelectPx = 2;

            fontElements[i].style.fontSize = fontPx[fontSelectPx];

        }
    }
        $('#font-size-options').hide();
    });

    //add link to selection text
    body.on('click','.link',function(){
        var selectionElement = document.getSelection;
        var link = prompt('insert link: ','http://');
        var sText = document.getSelection();
        if ((sText == null) || (sText == "")) {
            sText = "link";
            document.execCommand('insertHTML', false, '<a href="' + link + '" target="_blank">' + sText + '</a>');
        
        }else{
            document.execCommand('Createlink', false, link );
        }
    });

    //remove link to selection text link
    body.on('click','.unlink',function(){
        document.execCommand('unlink', false, false);
    });

    //toggle blod to selection text 
    body.on('click','.bold',function(){
        document.execCommand('bold',false,null);
    });

    //toggle italic to selection text 
    body.on('click','.italic',function(){
        document.execCommand('italic',false,null);
    });

    //toggle underline to selection text 
    body.on('click','.underline',function(){
        document.execCommand('underline',false,null);
    });

    //Text aling left to selection text 
    body.on('click','.text-left',function(){
        document.execCommand('justifyLeft',false,null);
    });

    //Text aling center to selection text 
    body.on('click','.text-center',function(){
        document.execCommand('justifyCenter',false,null);
    });

    //Text aling right to selection text 
    body.on('click','.text-right',function(){
        document.execCommand('justifyRight',false,null);
    });

    //Inser to horizontal line 
    body.on('click','.horizontal-line',function(){
        document.execCommand('insertHorizontalRule',false,null);
    });

    //show list font color
    body.on('click','.font-color',function(){
        $('.colors').toggle();
    });
    //Change color font to selection text 
    body.on('click','.color',function(){
        color = $(this).data('color');
        document.execCommand('ForeColor', false, color);
        $('.colors').hide();
    });
}

function imgaesRichtArea(){
    body = $('body');

    body.on('click','#edit-img-close', function(){
        $('#img').hide();
    });

    $('body').on('click','.img .icon-edit', function(){
        
        thisElement = $(this).parents('.img').children('.content');

        $('#img').show();

        if ($('#text').css('display') == 'block') {
             $('#text').hide();
        }else if ($('.menu-open')) {
            $('.menu-open').removeClass('menu-open');
            $('.open').removeClass('open');
        }

        $('body').on('click','.img-xsmall', function(){
                thisElement.css({'width':'20%'})
        });
        $('body').on('click','.img-small', function(){
                thisElement.css({'width':'33%'})
        });
        $('body').on('click','.img-medium', function(){
                thisElement.css({'width':'50%'})
        });
        $('body').on('click','.img-big', function(){
                thisElement.css({'width':'95%'})
        });
        $('body').on('click','.img-left', function(){
                thisElement.css({'margin':'0 auto 0 0'})
        });
        $('body').on('click','.img-center', function(){
                thisElement.css({'margin':'0 auto 0 auto'})
        });
        $('body').on('click','.img-right', function(){
                thisElement.css({'margin':'0 0 0 auto'})
        });
        $('body').on('click','.img-top', function(){
                thisElement.parents('.img').css({'vertical-align':'top'});
        });
        $('body').on('click','.img-sub', function(){
                thisElement.parents('.img').css({'vertical-align':'bottom'});
        });
    });
}
