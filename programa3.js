//Declaracion de variable
let horas,sueldo,bono,total;
//Fase de Lectura
horas=parseFloat(prompt("Ingrese las horas laboradas"));
//Fase del procesamiento
if (horas>40) {
   sueldo=horas*55;
   bono=sueldo*0.10;
} else {
   sueldo=horas*30;
   bono=sueldo*0.15;
}
total=sueldo+bono;
//Fase de salida
document.write("Sueldo inicial:/S "+sueldo+"<br>");
document.write(" Bonificacion:/S "+bono+"<br>");
document.write("Total a pagar:/S "+total);