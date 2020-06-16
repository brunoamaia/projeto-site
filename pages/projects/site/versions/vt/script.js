function openmenu() {
    event.preventDefault();
    document.getElementById("nav").style.right = "0px";
    document.getElementById("social").style.right = "0px";
}

function closenmenu() {
    event.preventDefault();
    document.getElementById("nav").style.right = "-100%";
    document.getElementById("social").style.right = "-100%";
}