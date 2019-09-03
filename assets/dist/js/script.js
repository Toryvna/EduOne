$(document).ready(function(){
     
    // toggle mobile menu
    $(document).mouseup(function(e){
        $('.toggleMenu').on('click', function () {
            $('#mainMenu').toggleClass('show');
        });
        $('#closeMenu').on('click', function () {
            $('#mainMenu').removeClass('show');
        });
        var menu = $('#mainMenu.show');
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.removeClass('show');
        }
    });
    //end toggle mobile menu

    //fixed menu
    $(window).scroll(function(){
        if($(this).scrollTop()>10){
            $('header').addClass('fixed').fadeIn('500');
        }
        else {
            $('header').removeClass('fixed');
        }
    });
    //End



});


