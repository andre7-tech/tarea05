//Declaracion de variable
let nombre,curso,nota,total,faltas,estado;
//Fase de Lectura
nombre=(prompt("Ingrese el nombre del estudiante"));
curso=(prompt("Ingrese el curso"));
total=parseInt(prompt("Ingrese el numero de clases del ciclo"));
faltas=parseInt(prompt("Ingrese el numero de clases no asistido"));
//Fase del procesamiento
if (faltas/total>0.20) {
    nota=0;
    estado="desaprobado por inasistencia";
} else {
    estado="aprobado por asistencia";
}
//Fase de salida
document.write("Nombre: "+nombre+"<br>");
document.write("Curso: "+curso+"<br>");
document.write("Estado: "+estado);