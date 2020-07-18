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

function alerta2() {
    var aviso = window.confirm('O site a seguir está em desenvolvimento,'
                        +' portanto pode apresentar instabilidades/erros.'
                        +'\nTem certeza que pretende prosseguir?');
    if (aviso == true) {
        return window.open('./versions/v2/index.html', '_self');
    } else {
        window.alert('Ficaremos nesta mesma página')
    }
}

function alertat() {
    var aviso = window.confirm('O site a seguir está em desenvolvimento,'
                        +' portanto pode apresentar instabilidades/erros.'
                        +'\nTem certeza que pretende prosseguir?');
    if (aviso == true) {
        return window.open('./versions/vt/index.html', '_self');
    } else {
        window.alert('Ficaremos nesta mesma página')
    }
}