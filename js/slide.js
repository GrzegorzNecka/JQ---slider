$(function () {

    //zmienne
    var slideShow = $('.slider'); //kontener ze slidami 
    var slideCount = $('.slides').length; //ilość slidóww
    var slideWidth = 100 / slideCount; //szerokość slidu
    var slideIndex = 0; //licznik

    //stawienie serokości długiego kontenera w css
    slideShow.css('width', slideCount + '00%')//szrokość równa szerokość slidu * 100%

    //szerokość lewy margines, ustwaienie 1 slidu
    slideShow.find('.slides').each(function (index) {
        $(this).css({
            'width': slideWidth + '%',
//            'margin-left': index * slideWidth + '%'
        });

    })

    //nawigacja slidera 
    $('.left').on('click', function(){
        slide(slideIndex - 1);   
    })

        $('.right').on('click', function(){
            slide(slideIndex + 1);
    })
    
    // - funkcja odpalająca 
    function slide(newSlideindex){
        
        if(newSlideindex < 0 || newSlideindex > slideCount -1){
            return;
        }
        
        var marginLeft = (newSlideindex * (-100)) + '%';
        
        slideShow.animate({'margin-left': marginLeft}, 800, function(){
            slideIndex = newSlideindex;
            slideCaption.fadeIn();
        });
        
        
        var slideCaption = slideShow.find('.tytul').eq(newSlideindex); slideCaption.fadeOut();
        //eq - to jest tyle co równa sięczhyba ... lepiej sprawdź
    }

});
