/*Obtener la fecha actual */
var fecha_actual = new Date();
/*Fecha*/
var day = fecha_actual.getDay();
var month = fecha_actual.getMonth();
var year = fecha_actual.getFullYear();

document.write(' Fecha: '+day+'/'+month+'/'+year);
