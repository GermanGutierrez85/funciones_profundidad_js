"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* 1 - Enunciado

Transforme todas las fuciones a continuación en funciones flecha
Verifique que en consola no figura ningún error en alguna de ellas

*/

console.log("Declaración de eventos");
const boton = document.querySelector("button");

/* boton.addEventListener("click", function() {
    boton.className = "btnClick";
}); */
const btnClick = _ => {boton.className = "btnClick";}

boton.addEventListener("click", btnClick);

/* boton.addEventListener("mouseout", function() {
    boton.className = "btnOut";
}); */

const btnOut = _ => {boton.className = "btnOut";}

boton.addEventListener("mouseout", btnOut);

console.log("Declaración de función una función común");
const nombreCompleto = (nombre, apellido) =>  nombre + "_" + apellido;

console.log(nombreCompleto("Max", "Power"));

console.log("Declaración de función anónima");
const iniciales = (nombre, apellido) =>  {
    return nombre[0].toUpperCase() + "_" + apellido[0].toUpperCase();
}


console.log(iniciales("Jean", "Grey"));

/* 2 - Enunciado

Cree una función flecha que dentro recorra un bucle
e imprima cada valor dentro de la variable "colores"

La variable colores no deberá pasarse como parámetro,
sino que debe utilizarse como variable global.

*/

const colores = ["azul", "verde", "amarillo", "rojo"];

const objetos = _ =>{
    for(const arrayColores of colores ){
        console.log (arrayColores);
    }
}
objetos();

//OTRA MANERA DE RESOLVERLO
/* const objetos = _ =>{
    for(let i = 0; i < colores.length; i++){
        console.log (colores[i]);
    }
} 
objetos();
*/