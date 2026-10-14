//Declaracion de variable
let precio,pf;
//Fase de Lectura
precio=parseFloat(prompt("Ingrese el precio inicial del producto"));
//Fase del procesamiento
if (precio>1000) {
   pf=precio-(precio*0.10);
} else {
   pf=precio+(precio*0.20);
}
//Fase de salida
document.write("Precio inicial:/S "+precio+"<br>");
document.write("Precio final:/S "+pf);