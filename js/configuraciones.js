var Contenido = document.getElementById("contenedor");
var contenedor = document.getElementById("contenedor-ventana");
var Menu = document.getElementById("Menu");
var oscuro = 0;
var letraGrande = 0;
//Tema oscuro
function Oscuro(){
    oscuro = 1;
    if(letraGrande == 1){
        OscuroVistaGrande();
    }
    else{
        OscuroVistaPequeña();
    }
}
//Tema claro
function Claro(){
    oscuro = 0;
    if(letraGrande == 1){
        ClaraVistaGrande();
    }
    else{
        ClaraVistaPequeña();
    }
}
//Letra grande
function LetraGrande(){
    letraGrande = 1;
    if(oscuro == 1){
        OscuroVistaGrande();
    }
    else{
        OscuroVistaGrande();
    }
}
//Letra pequeña
function VistaPequeña(){
    letraGrande = 0;
    if(oscuro == 1){
        OscuroVistaPequeña();
    }
    else{
        ClaraVistaPequeña();
    }
}

//Posibles estados
function OscuroVistaGrande(){
    contenedor.style = "background-color: rgb(17, 17, 17);"
    Contenido.style = "background-color: rgb(17, 17, 17);color: white;font-size: 25px;"
}
function OscuroVistaPequeña(){
    contenedor.style = "background-color: rgb(17, 17, 17);"
    Contenido.style = "background-color: rgb(17, 17, 17);color: white;font-size: 17px;"
}
function ClaraVistaGrande(){
    contenedor.style = "background-color: white;"
    Contenido.style = "background-color: white;color: black;font-size: 25px;"
}
function ClaraVistaPequeña(){
    contenedor.style = "background-color: white;"
    Contenido.style = "background-color: white;color: black;font-size: 17px;"
}
