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