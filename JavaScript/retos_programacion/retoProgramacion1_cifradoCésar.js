/*
 * Crea un programa que realize el cifrado César de un texto y lo imprima.
 * También debe ser capaz de descifrarlo cuando así se lo indiquemos.
 *
 * Te recomiendo que busques información para conocer en profundidad cómo
 * realizar el cifrado. Esto también forma parte del reto.
 */

let textoBase = "hvwhchvcxpcohpvdmhcfliudgrcsdudcsureduchñcfliudgrcfhvdu"
let cifradoCesar = ""

let abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z',' ']

function cifrado(textoBase,valorCifrado,boolean){
    if(boolean == true){
        for (let i = 0; i < textoBase.length; i++) {
            let posicionCifrada = (abecedario.indexOf(textoBase[i]) + valorCifrado) % abecedario.length
            cifradoCesar += abecedario[posicionCifrada]
        }
    }else{
        for (let i = 0; i < textoBase.length; i++) {
            let posicionCifrada = (abecedario.indexOf(textoBase[i]) - valorCifrado)
            if(posicionCifrada < 0){
                posicionCifrada = abecedario.length + posicionCifrada
            }
            cifradoCesar += abecedario[posicionCifrada]
        }
    }
    console.log(cifradoCesar)
}

cifrado(textoBase,3,false)