$(function () {         // Fixar o menu no topo
    var nav = $('.header')

    $(window).scroll(function () {
        if($(this).scrollTop()>50) {
            nav.addClass('menu-fixo')
        }  else {
            nav.removeClass('menu-fixo')
        }
    })
})

// Captura cliks para os elementos "#"
$(document).on('click', 'a[href^="#"]', function(event) {
    window.setTimeout(function() {
      offsetAnchor();
    }, 0);
});
// Reposiciona para a quatidade de pixeis nececárias para não sobrepor o texto
function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 35);
    }
}
window.setTimeout(offsetAnchor, 0);

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