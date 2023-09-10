/*
 * Crea un programa que detecte cuando el famoso "Código Konami" se ha introducido
 * correctamente desde el teclado. 
 * Si sucede esto, debe notificarse mostrando un mensaje en la terminal.
 */

// Codigo konami: ↑ ↑ ↓ ↓ ← → ← → B A
// Los codigos char son Unicode

const prompt = require('prompt-sync')()

let flechaArriba = String.fromCharCode(8593)
let flechaAbajo = String.fromCharCode(8595)
let flechaDerecha = String.fromCharCode(8594)
let flechaIzquierda = String.fromCharCode(8592)

let letraA = String.fromCharCode(65)
let letraB = String.fromCharCode(66)

// Se escriben valores literales porque no pueden introducirse flechas por teclado
let codigoKonami = "arriba"+"arriba"+"abajo"+"abajo"+"izquierda"+"derecha"+"izquierda"+"derecha"+"A"+"B"

let codigoIntroducido = prompt("Introduzca codigo: ")

if (codigoIntroducido == codigoKonami){
    console.log("Konami Code Introduced")
}else{
    console.log("Wrong Konami Code")
}

