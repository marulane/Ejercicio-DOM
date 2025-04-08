//document palabra reservada que hace referencia al DOM de la pagina
//.getElementById para acceder al elemento por el identificador declarado en el HTML
console.log(document.getElementById("encabezado1"));
//Si el nombre del id esta mal escrito regresa un resultado de tipo null
//Buena practica: copiar y pegar los nombres de todo

//Guardando el resultado en una variable
let encabezado1 = document.getElementById("encabezado1");

//getElementById Regresa un elemento
let encabezado2= document.getElementById("encabezado2");

let listas = document.getElementsByTagName("ul"); //2
//getElementsByTagName regresa una colección viva con el orden en el que se agregan

let elementos = document.getElementsByClassName("list-group-item");
//getElementsByClassName también regresa una colección viva

let otroElemento = document.querySelector("ul>li");
//querySelector regresa el primer elemento encontrado coincidente con el selector escrito

let otrosElementos = document.querySelectorAll("ul>li");
//Regresa una coleccion estatica (no viva) de las coindidencias del selector escrito

//Boton 1
let btnMostrar = document.getElementById("btnMostrar");

//console.log(listas[0]); //accediendo al elemento como si fuera un arreglo
console.log(listas.item(1)); // segunda forma de acceder al elemento

console.log(listas.length);//2

console.log(elementos.length);//10

console.log("otroElemento:",otroElemento); //Primera coincidencia

console.log(otrosElementos.length); //10

//Oreja agregada al boton1
//Toma el nombre del evento y una funcion como parametros - esta funcion puede ser externa, anónima o de flecha
btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); //evita el comportamiento por defecto del tipo de boton: submit (recargar pagina) / button / menu / reset
    console.log("Botón btnMostrar presionado"); //imprime mensaje
})



function modifica(){

    encabezado1.innerHTML = "<em>Ejercicio</em> DOM"
    //.innerHTML permite manipular la sintaxis del HTML

    encabezado2.innerText+="DOM Excercise";
    //innerText Propiedad de la etiqueta de lectura y escritura al contenido de la etiqueta

}



