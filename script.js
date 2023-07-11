let menuVisible = false;

//mostramos u ocultamos el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

//oclutamos menu luego de seleccion
function seleccionar() {
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//animaciones de skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if(distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("php"); 
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("htmlCss");
        habilidades[4].classList.add("teamWork");
        habilidades[5].classList.add("comunication");
        habilidades[6].classList.add("dedication");
        habilidades[7].classList.add("responsability");
    }
}

//deteccion de scrolling para aplicar animaciones
window.onscroll = function ( ) {
    efectoHabilidades();
}