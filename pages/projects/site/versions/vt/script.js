
//  Função para reposicionar a 
//$(document).on('click', 'a[href^="#"]', function(event) {
//    window.setTimeout(function() {
//        window.scrollTo(window.scrollX, window.scrollY -40);
//    }, 0);
//    $('.conteudo').css({'padding-top': '70px'});
//});
//window.setTimeout(offsetAnchor, 1);//

function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY -40);
    }
}
$(document).on('click', 'a[href^="#"]', function(event) {
    window.setTimeout(function() {
        offsetAnchor();
        $('html,body')
        .animate({ scrollTop: targetOffset }, 20);
    }, 0);
});



// Fixar menu no topo (fixa após usar a rolagem)
/*$(function () {         // Fixar o menu no topo
    var nav = $('.header')

    $(window).scroll(function () {
        if($(this).scrollTop()>50) {
            nav.addClass('menu-fixo')
        }  else {
            nav.removeClass('menu-fixo')
        }
    })
}) */

function openmenu() {
    //$("#nav").css("right:", 0 + "px");
    event.preventDefault();
    $('.nav').css({ 'right':'0px'});
    $('.social').css({ 'right':'0px'});
}

function closenmenu() {
    //$("#nav").css("right:", 0 + "px");
    event.preventDefault();
    $('.nav').css({ 'right':'-100%'});
    $('.social').css({ 'right':'-100%'});
}