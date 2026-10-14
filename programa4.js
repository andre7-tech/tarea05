//Declaracion de variable
let cant,costo,matricula,total;
//Fase de Lectura
cant=parseInt(prompt("Ingrese la cantidad de creditos matriculados"));
//Fase del procesamiento
costo=cant*50
if (cant>12) {
   matricula=0;
} else {
   matricula=250;
}
total=costo+matricula;
//Fase de salida
document.write("Cantidad de creditos: "+cant+"<br>");
document.write("Costo de creditos:/S "+costo+"<br>");
document.write("Costo de matricula:/S "+matricula+"<br>");
document.write("Inversion total:/S "+total);