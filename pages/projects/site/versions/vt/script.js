$(function () {
    var nav = $('.header')

    $(window).scroll(function () {
        if($(this).scrollTop()>50) {
            nav.addClass('menu-fixo')
        }  else {
            nav.removeClass('menu-fixo')
        }
    })
    
})

function openmenu() {
    //$("#nav").css("right:", 0 + "px");
    event.preventDefault();
    $('.nav').css({ 'right':'0px'});
}

function closenmenu() {
    //$("#nav").css("right:", 0 + "px");
    event.preventDefault();
    $('.nav').css({ 'right':'-100%'});
}