$(document).ready(function(){

    // menu auto scroll
    $('.menu .scroll').on('click', function(e){
        e.preventDefault(); 

        var _this = $(this).attr('href');
        
        $('body, html').animate({
            scrollTop: $(_this).offset().top
        }, 700);

    });


    // user dropdown
    $(function(){
        $('.user').hover(
            function(){
                $('.dropdown',this).stop(true, true).slideDown(200);
            },
            function(){
                $('.dropdown',this).stop(true, true).slideUp(200);
            }
        );

    });
});

