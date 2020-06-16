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