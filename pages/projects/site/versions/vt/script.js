
/*let nav = document.getElementById("nav")
let social = document.getElementById("social")*/

//  Função para reposicionar o inicio da seção selecionada 
//$(document).on('click', 'a[href^="#"]', function(event) {
//    window.setTimeout(function() {
//        window.scrollTo(window.scrollX, window.scrollY -40);
//    }, 0);
//    $('.conteudo').css({'padding-top': '70px'});
//});
//window.setTimeout(offsetAnchor, 1);//

function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 40);
    }
}
$(document).on('click', 'a[href^="#"]', function(event) {
    window.setTimeout(function() {
        offsetAnchor();
        $('html,body')
        .animate({ scrollTop: targetOffset }, 2000);
    }, 0);
});
window.setTimeout(offsetAnchor, 100);


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
    event.preventDefault();
    document.getElementById("nav").style.right = "0px";
    document.getElementById("social").style.right = "0px";

    //$("#nav").css("right:", 0 + "px");
    /*event.preventDefault();       // Uso de JQuery
    $('.nav').css({ 'right':'0px'});
    $('.social').css({ 'right':'0px'});*/
}

function closenmenu() {
    event.preventDefault();
    nav.style.right = "-100%";
    social.style.right = "-100%";

    //$("#nav").css("right:", 0 + "px");
    /*event.preventDefault();       // Uso de JQuery
    $('.nav').css({ 'right':'-100%'});
    $('.social').css({ 'right':'-100%'});*/
}