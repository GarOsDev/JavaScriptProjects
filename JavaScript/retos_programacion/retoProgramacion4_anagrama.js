/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

let palabra1 = "azul"
let palabra2 = "luza"

function anagrama(palabra1,palabra2){

    let contador = 0

    for (let i = 0; i < palabra1.length; i++) {
       for (let j = 0; j < palabra2.length; j++) {
            
        if(palabra1[i] == palabra2[j]){
            contador++
            break
        }
       }
    }

    if (contador == palabra1.length) {
        console.log(true)
    }else{
        console.log(false)
    }

}

anagrama(palabra1,palabra2)