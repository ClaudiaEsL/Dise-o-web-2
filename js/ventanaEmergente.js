var ventana = document.getElementById("ventana");
function AbrirFormulario(){
    ventana.style = "display: flex;";
}
function cerrarFormulario(){
    ventana.style = "display: none;";
}
//Verificar los datos"
var VNombre = document.getElementById("CorrectoName");
var VCorreo = document.getElementById("CorrectoCorreo");
var VTelefono = document.getElementById("CorrectoTelefono");

var verificar = 0;
function Verificar(){
    //Datos
    var nombre = document.getElementById('Nombre').value;
    var correo = document.getElementById('Correo').value;
    var telefono = document.getElementById('Telefono').value;
    var mensaje = document.getElementById('Mensaje').value;
    //Campos
    var CampoNombre = document.getElementById("Nombre");
    var CampoCorreo = document.getElementById("Correo");
    var CampoTelefono = document.getElementById("Telefono");
    var CampoMensaje = document.getElementById("Mensaje");

    camposVacios();
    if (verificar == 0){
        alert("Mensaje correcto");
    }
    if(verificar == 1){
        alert("Rellene todas las casillas");
    }
    verificar = 0;
    function camposVacios(){
        //Nombre
        if(nombre.length == 0){
            CampoNombre.style = "border: 1px red solid;"
            VNombre.style = "display: none;"
            verificar = 1;
        }
        if(nombre.length != 0){
            CampoNombre.style = "border: none;"
            VNombre.style = "display: flex;"
        }
        //Correo
        if(correo.length == 0){
            verificar = 1;
            CampoCorreo.style = "border: 1px red solid;"
            VCorreo.style = "display: none;"
        }
        if(correo.length != 0){
            CampoCorreo.style = "border: none;"
            VCorreo.style = "display: flex;"
        }
        //Telefono
        if(telefono.length == 0){
            verificar = 1;
            CampoTelefono.style = "border: 1px red solid;"
            VTelefono.style = "display: none;"
        }
        if(telefono.length != 0){
            CampoTelefono.style = "border: none;"
            VTelefono.style = "display: flex;"
        }
        //Mensaje
        if(mensaje.length == 0){
            verificar = 1;
            CampoMensaje.style = "border: 1px red solid;"
        }
        if(mensaje.length != 0){
            CampoMensaje.style = "border: none;"
        }
    }
}