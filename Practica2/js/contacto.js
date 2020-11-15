$("#Numeros").click(
    function () {
        alert("Contactate con nosotros!");
        $("#contacto").slideDown("slow").css("display","flex");
    }
);
$("#cerrar").click(
    function () {
        $("#contacto").slideUp(1000);
    }
);