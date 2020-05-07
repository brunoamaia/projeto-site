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

function alerta() {
    //var texto = ''
    //var windowObjectReference;
    var mensagem = window.confirm('O site a seguir está em deselvomvimento,'
                        +' portanto pode apresentar instabilidades/erros.'
                        +'\nTem certeza que pretende prosseguir?');
    if (mensagem == true) {
        //window.alert('Redirecionando ...')
        window.open('./versions/v2/index.html', '_self');
        //window.opener('./versions/v2/index.html', '_self');
        //location.href = './versions/v2/index.html'
        //location.href = './versions/v2/index.html'
    } else {
        window.alert('Ficaremos nesta mesma página')
    }

}