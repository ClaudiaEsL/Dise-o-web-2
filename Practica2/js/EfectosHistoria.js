//Botones historia
$("#Menos").click(
    function () { 
        $("#Texto-historia").css("display","flex").slideUp(1000);     
    }
);

$("#Mas").click(
    function () { 
        $("#Texto-historia").slideDown("slow");
    }
);
//Botones nosotros
$("#Menos2").click(
    function () {     
        $("#texto-nosotros").css("display","flex").slideUp(1000);
    }
    
);

$("#Mas2").click(
    function () { 
        $("#texto-nosotros").slideDown("slow");
    }
);
//BotonesResponsabilidad Social
$("#Menos3").click(
    function () {     
        $("#texto-RSocial").css("display","block").slideUp(1000);
    }
    
);

$("#Mas3").click(
    function () { 
        $("#texto-RSocial").slideDown("slow");
    }
);
